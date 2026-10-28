🧩 Terminal Riddle Game
A clean, object-oriented CLI-based riddle game built with Node.js (ES module syntax). Test your knowledge across a series of engaging riddles, track your completion times, and view your performance statistics upon finishing!

🚀 Features
Object-Oriented Architecture (OOP): Modular code structured with clean class inheritance (Riddle, MultipleChoiceRiddle, Player).

Interactive CLI Gameplay: Dynamic terminal prompts built with readline-sync and robust do...while validation loops.

Support for Multiple Riddle Types: Standard text-input riddles as well as multiple-choice questions with option selection.

Precision Time Tracking: Accurately logs completion duration per riddle using Date.now().

Player Performance Analytics: Provides a summary of total time spent and average time per riddle at the end of the session.

Modular Registry System: Easily extensible structure with a centralized index file for loading and managing riddles.

📁 Project Structure
Plaintext
riddle-game/
│
├── classes/
│   ├── Riddle.js                # Base Riddle class
│   ├── MultipleChoiceRiddle.js  # Extended class for multiple-choice riddles
│   └── Player.js                # Handles player identity and time tracking
│
├── riddles/
│   ├── r1.js                    # Sample riddle module 1
│   ├── r2.js                    # Sample riddle module 2
│   └── index.js                 # Central registry exporting all riddles
│
├── app.js                       # Main application entry point & game loop
├── package.json                 # Project configuration & ESM dependencies
└── README.md                    # Documentation
🛠️ Prerequisites
Node.js (v14 or higher recommended)

npm (comes bundled with Node.js)

⚙️ Installation & Setup
Clone the repository:

Bash
git clone https://github.com/your-username/riddle-game.git
cd riddle-game
Install dependencies:

Bash
npm install
Ensure ES Modules are enabled in package.json:

JSON
{
  "type": "module"
}
🎮 How to Play
Run the application using Node.js:

Bash
node app.js
Enter your player name when prompted.

Read through each riddle carefully.

Type your answer (or select the corresponding option number for multiple-choice questions) and press Enter.

Keep attempting until you solve the riddle correctly to proceed to the next one.

Review your total time and average time per riddle on the final performance card!

🧪 Technical Highlights
ES Modules (import/export): Native JavaScript module system used across all files.

Inheritance in Action: MultipleChoiceRiddle extends Riddle to override the ask() method while preserving base properties (id, name, taskDescription, correctAnswer).

Input Normalization: Uses .trim() on all text comparisons to prevent whitespace-mismatch bugs.

📄 License
This project is open-source and available under the MIT License.



🧩 משחק חידות בטרמינל (Terminal Riddle Game)
משחק חידות אינטראקטיבי המבוסס על שורת הפקודה (CLI) ומנוהל באמצעות תכנות מונחה עצמים (OOP), שנבנה ב־Node.js (בשימוש בתחביר ES Modules). בחנו את הידע שלכם לאורך סדרת חידות מאתגרות, עקבו אחר זמני הפתרון שלכם, וצפו בסטטיסטיקות הביצועים שלכם בסיום!

🚀 תכונות עיקריות
ארכיטקטורה מונחית עצמים (OOP): קוד מודולרי המבני תוך שימוש בירושת מחלקות נקייה (Riddle, MultipleChoiceRiddle, Player).

משחק אינטראקטיבי בטרמינל: הנחיות דינמיות בשורת הפקודה המבוססות על readline-sync ולולאות אימות חסונות מסוג do...while.

תמיכה בסוגי חידות שונים: חידות המבוססות על הקשת טקסט חופשי לצד שאלות רב־בררה (Multiple-Choice) עם בחירת אופציות ממוספרות.

מעקב זמנים מדויק: תיעוד מדויק של משך זמן הפתרון לכל חידה באמצעות Date.now().

אנליטיקת ביצועי שחקן: הצגת סיכום הכולל את סך כל הזמן שהושקע והזמן הממוצע לחידה בתום הסשן.

מערכת רישום מודולרית: מבנה הניתן להרחבה בקלות הודות לקובץ אינדקס מרכזי לניהול וטעינה של כל החידות.

📁 מבנה הפרויקט
Plaintext
riddle-game/
│
├── classes/
│   ├── Riddle.js                # מחלקת הבסיס לחידות
│   ├── MultipleChoiceRiddle.js  # מחלקה יורשת לחידות רב־בררה
│   └── Player.js                # ניהול זהות השחקן ומעקב זמנים
│
├── riddles/
│   ├── r1.js                    # מודול חידה לדוגמה 1
│   ├── r2.js                    # מודול חידה לדוגמה 2
│   └── index.js                 # מרשם מרכזי המייצא את כל החידות
│
├── app.js                       # נקודת הכניסה הראשית ליישום ולולאת המשחק
├── package.json                 # הגדרות הפרויקט ותלויות ה־ESM
└── README.md                    # תיעוד הפרויקט
🛠️ דרישות קדם
Node.js (מומלץ בגרסה 14 ומעלה)

npm (מגיע מותקן יחד עם Node.js)

⚙️ התקנה והדגרה
שכפול המאגר (Clone):

Bash
git clone https://github.com/your-username/riddle-game.git
cd riddle-game
התאמת התלויות:

Bash
npm install
וידוא הגדרת ה־ES Modules בקובץ package.json:

JSON
{
  "type": "module"
}
🎮 איך לשחק
הפעלת היישום באמצעות Node.js:

Bash
node app.js
הזינו את שמכם כאשר תתבקשו לכך.

קראו בעיון כל חידה.

הזינו את התשובה שלכם (או בחרו את מספר האופציה המתאים בשאלות רב־בררה) ולחצו על Enter.

המשיכו לנסות עד שתפתרו את החידה נכון כדי להתקדם לבאה בתור.

עברו על הזמן הכולל והזמן הממוצע לחידה בכרטיסיית סיכום הביצועים הסופית!

🧪 דגשים טכנולוגיים
ES Modules (import/export): שימוש במערכת המודולים הנייטיבית של JavaScript בכל קובצי הפרויקט.

מימוש ירושה (Inheritance): המחלקה MultipleChoiceRiddle יורשת מ־Riddle ומבצעת דריסה (Override) למתודה ask() תוך שמירה על המאפיינים הבסיסיים (id, name, taskDescription, correctAnswer).

נרמול קלט (Input Normalization): שימוש בפונקציה .trim() בכל השוואות הטקסט כדי למנוע באגים הנובעים מרווחים מיותרים.

📄 רישיון
פרויקט זה מופץ תחת רישיון MIT (Open-Source).