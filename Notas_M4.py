RA1_A1_PR1 = float(input("Nota RA1 A1 PR1: "))
RA1_A2_PR2 = float(input("Nota RA1 A2 PR2: "))
RA1_A2plus_PE1 = float(input("Nota RA1 A2+ PE1: "))
RA1_A2plus_PP1 = float(input("Nota RA1 A2+ PP1: "))
RA2_A3_PR3 = float(input("Nota RA2 A3 PR3: "))
RA2_A4_PR4 = float(input("Nota RA2 A4 PR4: "))
RA2_A4plus_PP2 = float(input("Nota RA2 A4+ PP2: "))
RA2_A5_PR5 = float(input("Nota RA2 A5 PR5: "))
RA2_A5plus_PP3 = float(input("Nota RA2 A5+ PP3: "))

RA1 = round((0.05*RA1_A1_PR1 + 0.1*RA1_A2_PR2 + 0.4*RA1_A2plus_PE1 + 0.45*RA1_A2plus_PP1), 2)
RA2 = round((0.1*RA2_A3_PR3 + 0.1*RA2_A4_PR4 + 0.3*RA2_A4plus_PP2 + 0.1*RA2_A5_PR5 + 0.4*RA2_A5plus_PP3), 2)
UF1 = round((0.1*RA1 + 0.9*RA2), 2)

print("RA1 = ", RA1, "\nRA2 = ", RA2, "\nUF1 = ", UF1)