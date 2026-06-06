import os
import re
import shutil

directory = "/home/nasir-uddin/Data/Projects/skif-bd/images"

# Target directories mapping
folders = [
    "Gallery",
    "Dojos",
    "Guests",
    "WhatsApp_Uploads",
    "Logos_and_UI",
    "Certificates_and_Results",
    "Posters_and_Flyers",
    "Documents",
    "Videos",
    "EC_Committee_and_Members",
    "Events_and_Tournaments"
]

# Ensure folders exist
for folder in folders:
    os.makedirs(os.path.join(directory, folder), exist_ok=True)

wa_counter = 1

def categorize_and_rename(file_name):
    global wa_counter
    lower_name = file_name.lower()
    
    # 1. Documents
    if lower_name.endswith('.pdf') or 'bulletin' in lower_name or 'camscanner' in lower_name:
        return "Documents", file_name
    
    # 2. Videos
    if lower_name.endswith('.mp4'):
        return "Videos", file_name
        
    # 3. Logos_and_UI
    if 'logo' in lower_name or 'flage' in lower_name or 'front01' in lower_name or 'skif-2' in lower_name or 'images.png' in lower_name:
        return "Logos_and_UI", file_name
        
    # 4. Certificates_and_Results
    if 'certificate' in lower_name or 'dan' in lower_name or 'result' in lower_name:
        return "Certificates_and_Results", file_name
        
    # 5. Posters_and_Flyers
    if 'poster' in lower_name or 'flyer' in lower_name:
        return "Posters_and_Flyers", file_name
        
    # 6. Guests
    if 'guest' in lower_name:
        return "Guests", file_name
        
    # 7. Dojos
    if file_name.startswith('SKA'):
        return "Dojos", file_name
        
    # 8. Events_and_Tournaments
    if 'cup' in lower_name:
        return "Events_and_Tournaments", file_name
        
    # 9. WhatsApp_Uploads
    if 'whatsapp' in lower_name:
        # try to rename WhatsApp-Image-2024-06-05-at-14.08.33_d3fd19e6.jpg to wa_2024_06_05_1.jpg
        match = re.search(r'whatsapp-image-(\d{4}-\d{2}-\d{2})', lower_name)
        ext = os.path.splitext(file_name)[1]
        if match:
            date_part = match.group(1).replace('-', '_')
            new_name = f"wa_{date_part}_{wa_counter}{ext}"
        else:
            new_name = f"wa_unknown_{wa_counter}{ext}"
        wa_counter += 1
        return "WhatsApp_Uploads", new_name
        
    # 10. EC_Committee_and_Members
    # Any image that looks like a person's name (camelcase or hyphens without numbers usually)
    people = ['Akbar-Ali', 'Hasan-Khan-Sun', 'Ikbal-Ahamed', 'Kakir', 'Kazi-Ali', 'Khondakar', 'Liku', 'M-R-Billal', 'Md-Shahajahan', 'Md-Shofikul', 'Md.-Shananoug', 'Mohammad-Raihan', 'Dewan-Matlub', 'Dr-Tareq', 'Dr-Zahid', 'Dr.-Tufayel', 'Nazim', 'Nilufar', 'Proffessor-Dr', 'Raihan', 'Ramjan', 'Rony', 'S-K-Hasan', 'Shahzada', 'Sheikh-Didar', 'Shihan-Tetsuro', 'Solayman', 'Zia', 'bahar', 'manabu', 'minister-Salahuddin', 'Aminul']
    for p in people:
        if p.lower() in lower_name:
            return "EC_Committee_and_Members", file_name
            
    # 11. Gallery
    # Fallback for all other images
    if lower_name.endswith(('.jpg', '.jpeg', '.png', '.gif', '.webp', '.tif')):
        return "Gallery", file_name
        
    # Anything else (if any)
    return None, file_name

moved_count = 0

for item in os.listdir(directory):
    item_path = os.path.join(directory, item)
    if os.path.isfile(item_path):
        folder, new_name = categorize_and_rename(item)
        if folder:
            dest_path = os.path.join(directory, folder, new_name)
            counter = 1
            base, ext = os.path.splitext(new_name)
            while os.path.exists(dest_path) and item_path != dest_path:
                dest_path = os.path.join(directory, folder, f"{base}_{counter}{ext}")
                counter += 1
            shutil.move(item_path, dest_path)
            moved_count += 1
            print(f"Moved {item} -> {folder}/{os.path.basename(dest_path)}")

print(f"\nCategorized and moved {moved_count} files.")
