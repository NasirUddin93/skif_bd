import os
import re

directory = "/home/nasir-uddin/Data/Projects/skif-bd/images"
deleted_count = 0
deleted_size = 0

patterns_to_strip = [
    r'-\d+x\d+',
    r'-scaled',
    r'-Copy',
    r'-e\d+',
    r'-resize-\d+',
    r'_[a-f0-9]{8}' # for files like WhatsApp-Image-2024-03-26-at-05.24.17_a84c6581-150x150.jpg, wait, if the base file is WhatsApp-Image..._a84c6581.jpg, then the base HAS the hash.
]

# Wait, the suffix patterns must be at the end before extension.
# E.g. -150x150, -scaled, -Copy. Let's just stick to the obvious ones.
patterns_to_strip = [
    r'-\d+x\d+',
    r'-scaled',
    r'-Copy',
    r'-e\d+',
    r'-resize-\d+'
]

def find_base_file(filepath):
    dir_name = os.path.dirname(filepath)
    base_name = os.path.basename(filepath)
    name, ext = os.path.splitext(base_name)
    
    # Try stripping patterns from the end of the name
    original_name = name
    changed = True
    while changed:
        changed = False
        for pattern in patterns_to_strip:
            new_name = re.sub(pattern + r'$', '', original_name)
            if new_name != original_name:
                original_name = new_name
                changed = True
                
    if original_name != name:
        potential_base = os.path.join(dir_name, original_name + ext)
        if os.path.exists(potential_base):
            return potential_base
            
    return None

files_to_delete = []

for root, dirs, files in os.walk(directory):
    for file in files:
        filepath = os.path.join(root, file)
        base = find_base_file(filepath)
        if base and base != filepath:
            files_to_delete.append(filepath)

for filepath in files_to_delete:
    try:
        size = os.path.getsize(filepath)
        os.remove(filepath)
        deleted_count += 1
        deleted_size += size
        print(f"Deleted: {filepath}")
    except Exception as e:
        print(f"Error deleting {filepath}: {e}")

print(f"\nTotal deleted: {deleted_count} files")
print(f"Total space saved: {deleted_size / (1024*1024):.2f} MB")
