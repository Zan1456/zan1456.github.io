#Ne nyúlj hozzá :)
ismetles = 1
promo = 1

#Mértékegységek
B = 'B'  #bájt
KB = 'KB'  #Kilobájt
MB = 'MB'  #Megabájt
GB = 'GB'  #Gigabájt
TB = 'TB'  #Terabájt

KiB = 'KiB'  #Kibibájt
MiB = 'MiB'  #Mebibájt
GiB = 'GiB'  #Gibibájt
TiB = 'TiB'  #Tebibájt

b = 'b'  #bit
Kb = 'Kb'  #Kilobit
Mb = 'Mb'  #Megabit
Gb = 'Gb'  #Gigabit
Tb = 'Tb'  #Terabit

Kib = 'Kib'  #Kibibit
Mib = 'Mib'  #Mebibit
Gib = 'Gib'  #Gibibit
Tib = 'Tib'  #Tebibit

while ismetles == 1:
  if promo == 1:
    print('\033[96m\033[1mÁtváltó, by \033[4;37mZan1456\n')
    promo = 0
  #Adatbekérés
  szam = int(input('\n\033[0;37m\033[1;96mAdd meg az átváltandó számot: '))
  mertekegyseg = input('Add meg az átváltandó szám mértékegységét: ')
  mertekegysegTo = input('Add meg az átváltott szám mértékegységét: ')

  #Átváltás
  if mertekegyseg == KB:
    szam = szam * 1000
    mertekegyseg = B
  if mertekegyseg == MB:
    szam = szam * 1000000
    mertekegyseg = B
  if mertekegyseg == GB:
    szam = szam * 1000000000
    mertekegyseg = B
  if mertekegyseg == TB:
    szam = szam * 1000000000000
    mertekegyseg = B

  if mertekegyseg == KiB:
    szam = szam * 1024
    mertekegyseg = B
  if mertekegyseg == MiB:
    szam = szam * 1024
    szam = szam * 1024
    mertekegyseg = B
  if mertekegyseg == GiB:
    szam = szam * 1024
    szam = szam * 1024
    szam = szam * 1024
    mertekegyseg = B
  if mertekegyseg == TiB:
    szam = szam * 1024
    szam = szam * 1024
    szam = szam * 1024
    szam = szam * 1024
    mertekegyseg = B

  if mertekegyseg == Kb:
    szam = szam * 1000
    mertekegyseg = b
  if mertekegyseg == Mb:
    szam = szam * 1000000
    mertekegyseg = b
  if mertekegyseg == Gb:
    szam = szam * 1000000000
    mertekegyseg = b
  if mertekegyseg == Tb:
    szam = szam * 1000000000000
    mertekegyseg = b

  if mertekegyseg == Kib:
    szam = szam * 1024
    mertekegyseg = b
  if mertekegyseg == Mib:
    szam = szam * 1024
    szam = szam * 1024
    mertekegyseg = b
  if mertekegyseg == Gib:
    szam = szam * 1024
    szam = szam * 1024
    szam = szam * 1024
    mertekegyseg = b
  if mertekegyseg == Tib:
    szam = szam * 1024
    szam = szam * 1024
    szam = szam * 1024
    szam = szam * 1024
    mertekegyseg = b

  #Számolás
  if mertekegyseg == B:
    if mertekegysegTo == B:
      print('Eredmény:\033[92m', szam, B)
    if mertekegysegTo == KB:
      szam = szam / 1000
      print('Eredmény:\033[92m', szam, KB)
    if mertekegysegTo == MB:
      szam = szam / 1000000
      print('Eredmény:\033[92m', szam, MB)
    if mertekegysegTo == GB:
      szam = szam / 1000000000
      print('Eredmény:\033[92m', szam, GB)
    if mertekegysegTo == TB:
      szam = szam / 1000000000000
      print('Eredmény:\033[92m', szam, TB)

    if mertekegysegTo == b:
      szam = szam * 8
      print('Eredmény:\033[92m', szam, b)
    if mertekegysegTo == Kb:
      szam = szam * 8
      szam = szam / 1000
      print('Eredmény:\033[92m', szam, Kb)
    if mertekegysegTo == Mb:
      szam = szam * 8
      szam = szam / 1000000
      print('Eredmény:\033[92m', szam, Mb)
    if mertekegysegTo == Gb:
      szam = szam * 8
      szam = szam / 1000000000
      print('Eredmény:\033[92m', szam, Gb)
    if mertekegysegTo == Tb:
      szam = szam * 8
      szam = szam / 1000000000000
      print('Eredmény:\033[92m', szam, Tb)

    if mertekegysegTo == KiB:
      szam = szam / 1024
      print('Eredmény:\033[92m', szam, KiB)
    if mertekegysegTo == MiB:
      szam = szam / 1024
      szam = szam / 1024
      print('Eredmény:\033[92m', szam, MiB)
    if mertekegysegTo == GiB:
      szam = szam / 1024
      szam = szam / 1024
      szam = szam / 1024
      print('Eredmény:\033[92m', szam, GiB)
    if mertekegysegTo == TB:
      szam = szam / 1024
      szam = szam / 1024
      szam = szam / 1024
      szam = szam / 1024
      print('Eredmény:\033[92m', szam, TiB)

    if mertekegysegTo == Kib:
      szam = szam * 8
      szam = szam / 1024
      print('Eredmény:\033[92m', szam, Kib)
    if mertekegysegTo == Mib:
      szam = szam * 8
      szam = szam / 1024
      szam = szam / 1024
      print('Eredmény:\033[92m', szam, Mib)
    if mertekegysegTo == Gib:
      szam = szam * 8
      szam = szam / 1024
      szam = szam / 1024
      szam = szam / 1024
      print('Eredmény:\033[92m', szam, Gib)
    if mertekegysegTo == Tib:
      szam = szam * 8
      szam = szam / 1024
      szam = szam / 1024
      szam = szam / 1024
      szam = szam / 1024
      print('Eredmény:\033[92m', szam, Tib)

  if mertekegyseg == b:
    if mertekegysegTo == b:
      print('Eredmény:\033[92m', szam, b)
    if mertekegysegTo == Kb:
      szam = szam / 1000
      print('Eredmény:\033[92m', szam, Kb)
    if mertekegysegTo == Mb:
      szam = szam / 1000000
      print('Eredmény:\033[92m', szam, Mb)
    if mertekegysegTo == Gb:
      szam = szam / 1000000000
      print('Eredmény:\033[92m', szam, Gb)
    if mertekegysegTo == Tb:
      szam = szam / 1000000000000
      print('Eredmény:\033[92m', szam, Tb)

    if mertekegysegTo == B:
      szam = szam / 8
      print('Eredmény:\033[92m', szam, B)
    if mertekegysegTo == KB:
      szam = szam / 8
      szam = szam / 1000
      print('Eredmény:\033[92m', szam, KB)
    if mertekegysegTo == MB:
      szam = szam / 8
      szam = szam / 1000000
      print('Eredmény:\033[92m', szam, MB)
    if mertekegysegTo == GB:
      szam = szam / 8
      szam = szam / 1000000000
      print('Eredmény:\033[92m', szam, GB)
    if mertekegysegTo == TB:
      szam = szam / 8
      szam = szam / 1000000000000
      print('Eredmény:\033[92m', szam, TB)

    if mertekegysegTo == Kib:
      szam = szam / 1024
      print('Eredmény:\033[92m', szam, Kib)
    if mertekegysegTo == Mib:
      szam = szam / 1024
      szam = szam / 1024
      print('Eredmény:\033[92m', szam, Mib)
    if mertekegysegTo == Gib:
      szam = szam / 1024
      szam = szam / 1024
      szam = szam / 1024
      print('Eredmény:\033[92m', szam, Gib)
    if mertekegysegTo == Tib:
      szam = szam / 1024
      szam = szam / 1024
      szam = szam / 1024
      szam = szam / 1024
      print('Eredmény:\033[92m', szam, Tib)

    if mertekegysegTo == KiB:
      szam = szam / 8
      szam = szam / 1024
      print('Eredmény:\033[92m', szam, KiB)
    if mertekegysegTo == MiB:
      szam = szam / 8
      szam = szam / 1024
      szam = szam / 1024
      print('Eredmény:\033[92m', szam, MiB)
    if mertekegysegTo == GiB:
      szam = szam / 8
      szam = szam / 1024
      szam = szam / 1024
      szam = szam / 1024
      print('Eredmény:\033[92m', szam, GiB)
    if mertekegysegTo == TiB:
      szam = szam / 8
      szam = szam / 1024
      szam = szam / 1024
      szam = szam / 1024
      szam = szam / 1024
      print('Eredmény:\033[92m', szam, TiB)

