Mocha Marc's — mockup-style GitHub build

Visual:
- Three-column coffee tile menu inspired by the approved mockup.
- Compact logo/header and segmented navigation.
- Cleaner customization and Barista Board cards.

Rules:
- No sizes or prices.
- Only Marc's established drinks.
- Milk: 2% or Oat only.
- Espresso: shots only.
- Cappuccino: no syrups.
- Brown Sugar Shaken Espresso and Iced Caramel Macchiato: fixed recipe flavoring, no syrup/sauce picker.
- Iced White Chocolate Cinnamon Dolce Latte defaults to 2 Cinnamon Dolce + 2 White Chocolate and remains adjustable.
- Syrup/sauce pump counts appear on Barista Board.

Important:
The existing Supabase database currently has SELECT and INSERT policies for anonymous users but no UPDATE policy. The status-button JavaScript is present, but Supabase must grant a secure update path before New/Making/Ready/Done can persist.
