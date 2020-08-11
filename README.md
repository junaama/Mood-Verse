# Mood-Verse

## Project Description
Mood verse will generate a verse from the bible based on your mood! You can state your mood through a text input, or speech input.
## API
[Bible API](https://bible-api.com/)
```{
"reference": "John 3:16",
"verses": [
{
"book_id": "JHN",
"book_name": "John",
"chapter": 3,
"verse": 16,
"text": "\nFor God so loved the world, that he gave his one and only Son, that whoever believes in him should not perish, but have eternal life.\n\n"
}
],
"text": "\nFor God so loved the world, that he gave his one and only Son, that whoever believes in him should not perish, but have eternal life.\n\n",
"translation_id": "web",
"translation_name": "World English Bible",
"translation_note": "Public Domain"
}
```
[DeepAffects](https://developers.deepaffects.com/docs)
```
{
    "segments":
        [{
        "emotion": "joy",
        "start": 0,
        "end": 1
    }]
}
```

## Wireframes
[Mobile App Wireframe](https://www.figma.com/file/ZGbwX63DAzaRzunCK5cLhn/Mood-Verse)

## User Stories
* User will be able to record their voice  to state their current mood ("I am feeling hopeful")
* User will be able to view bible verses based on mood
* User will be able to navigate through pages (Home, Saved, Settings)
* User will be able to view a Verse of the day on the home page
* User will be able to leave feedback, change notifications, and share app in the settings

## Time Priority Matrix
| Component                    | Priority | Estimated Time | Time Invested |
| --------------------------   | :----:   |  :-----------: | :-----------: |
| Backend Setup(Routes, Controllers, Schema, Seed)          |    H     |      4hrs      |   |
| User routes/controllers | H | 3hrs | 0 |
|  User schema / seed | H | 1hr | 0|
| Deploy backend | H | 2hrs | o |
| Backend research/ API research | H | 8hrs | 0 |
| Deepaffects setup | M | 4hrs | 0 |
| RESTful Api Calls            | H | 3hrs | 0 |
| Frontend research | H | 3hrs | 0 |
| User login/auth | M | 4hrs | 0 |
| Styling/Responsive Design | M | 12hrs | 0 |
| Settings page | L | 4hrs | 0 |
| NavBar /Routes | H | 2hrs | 0 |
| Verse of the day | M | 3hrs | 0 |
| Verse based on mood | H | 5hrs | 0 |
| Render saved verses to Saved page | L | 4hrs | 0 |
| Setup voice recording | H | 4hrs | 0 |
| Total                        |          |     66hrs     |               |   
## MVP

## Post-MVP
* Use spotify API/widget to generate a song based on mood
* Use YouVersion API to generate a Reading Plan/Devotional based on mood

## Components

## Additional Libraries
    https://www.openbible.info/topics/adventure
## Code Snippet

## Bugs & Fixes
