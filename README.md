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
| Backend Setup(Routes, Controllers, Schema, Seed)          |    H     |      4hrs      |  17hrs |
| User/verses routes/controllers | H | 3hrs | 8hrs |
|  User/verse schema / seed | H | 1hr | 1hr|
| Deploy backend | H | 2hrs | 1hr |
| Backend research/ API research | H | 8hrs | 21hrs |
| Deepaffects setup | M | 4hrs | 5 |
| RESTful Api Calls            | H | 3hrs | 3hrs |
| Frontend research | H | 3hrs | 7hr |
| User login/auth | M | 4hrs | 12hr |
| Styling/Responsive Design | M | 12hrs | 3hr |
| Settings page | L | 4hrs | 0 |
| NavBar /Routes | H | 2hrs | 1hr |
| Verse of the day | M | 3hrs | 0 |
| Verse based on mood | H | 5hrs | 4hrs |
| Render saved verses to Saved page | L | 4hrs | 0 |
| Setup voice recording | H | 4hrs | 8hrs |
| Research/Setup React Native | M | 8hrs | 0 |
| Total                        |          |     74hrs     |               |   
## MVP
* Verse given based on mood of user
* Saved page with saved verses of user
* About Page
* Feedback Form
*
## Post-MVP
* Use spotify API/widget to generate a song based on mood
* Use YouVersion API to generate a Reading Plan/Devotional based on mood
* Verse of the day on home page
* Full fleshed settings page
* Generate spotify playlist based on saved songs
* Deploy for download on phone
* Share app with friends


### Post Post-MVP
* Tutorial page for how to use app
* Change version of bible (KJV, NIV, etc)
* Change language of app
* Animate Jesus narrating the verse that's given
## Components

## Additional Libraries
    https://www.openbible.info/topics/adventure
    https://oliver.readme.io/docs/get-results-after-completion
    https://good-vibrations.nl/contact/
    https://developers.vokaturi.com/using/c-sample-batch
    https://developers.deepaffects.com/app/dashboard
## Code Snippet

## Bugs & Fixes
* Accidentally pushed mongodb uri key in my git commit
    * I had to delete my backend git repo and start over
#### Things I learned
- Webhooks [https://simonfredsted.com/1583]
* Webhooks allow for API's to send if data has been updated
    * In programming, the word “hook” comes from the phrase “hooking into” something, so a Webhook is hooking into an event, or making the application call it whenever the event happens. The application has a list of hooks that must be notified whenever a given action occurs, but since Webhooks are usually asynchronous, the application doesn’t wait for a response. In your example, let’s say there’s an app that has created a Webhook for when you’re picking up your keys from the table (before going outside) — the event. When called, it can then check the weather and send you an alert on your phone saying that it’s raining. - Simon Fredsted
- Speech Recognition API