# Mood-Verse

## Project Description
Mood verse will generate a verse from the bible based on your mood! You can state your mood through a text input, or speech input.
## API
[Mood verse API]()
```{
"_id": "000000000000000",
"versePath": "Psalm 144:15",
"content": "Blessed are the people to whom such blessings fall! Blessed are the people whose God is the Lord!",
"mood": "happy",
},
```
[SpeechRecognition Web API](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition)


## Wireframes
[Mobile Wireframe](https://www.figma.com/file/ZGbwX63DAzaRzunCK5cLhn/Mood-Verse)

## User Stories
* User will be able to record their voice  to state their current mood ("I am feeling hopeful")
* User will be able to view bible verses based on mood
* User will be able to navigate through pages (Home, Saved, Settings)
* User will be able to view a Verse of the day on the home page
* User will be able to leave feedback, change notifications, and share app in the settings

## Time Priority Matrix
| Component                    | Priority | Estimated Time | Time Invested |
| --------------------------   | :----:   |  :-----------: | :-----------: |
| Backend Setup(Routes, Controllers, Schema, Seed)          |    H     |      4hrs      |  22hrs |
| User/verses/books routes/controllers | H | 3hrs | 12hrs |
|  User/verse/books schema / seed | H | 1hr | 3hr|
| Deploy backend | H | 2hrs | 1hr |
| Backend research/ API research | H | 8hrs | 35hrs |
| Deepaffects setup | M | 4hrs | 5hrs |
| RESTful Api Calls            | H | 3hrs | 6hrs |
| Frontend research | H | 3hrs | 15hrs |
| User login/auth | M | 4hrs | 12hr |
| Styling/Responsive Design | M | 12hrs | 20hrs |
| Settings page | L | 4hrs | 5hrs |
| NavBar /Routes | H | 2hrs | 1hr |
| Verse of the day | M | 3hrs | 0hrs |
| Verse based on mood | H | 5hrs | 4hrs |
| Render saved verses to Saved page | L | 4hrs | 5hrs |
| Setup voice recording | H | 4hrs | 8hrs |
| Research/Setup React Native | M | 8hrs | 0hrs |
| Setup reading plans | M | 4hrs | 2hrs |
| Total                        |          |     74hrs     |     156hrs        |   
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

## Additional Libraries
- [Open Bible](https://www.openbible.info/topics/)
- [React Text Loop](https://github.com/braposo/react-text-loop)
  -  Material UI
   - Speech Recognition Webkit API
    - Reactstrap
## Code Snippet
* It was really fun learning user authentication and I liked figuring out how it works in the backend
```
router.post("/register", async (req, res) => {
  try {
    let { email, password, password2, username } = req.body;

    if (!email || !password || !password2) {
      return res.status(400).json({ msg: "Not all fields have been entered" });
    }
    if (password !== password2) {
      return res
        .status(400)
        .json({ msg: "Enter the same password twice for verification" });
    }
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res
        .status(400)
        .json({ msg: "An account with this email already exists" });
    }
    if (!username) {
      username = email;
    }
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      email,
      password: passwordHash,
      username,
    });
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
```
## Bugs & Fixes
* Accidentally pushed mongodb uri key in my git commit
    * I had to delete my backend git repo and start over
* Record button only working on mobile
    * It was a css issue, I styled the div surrounding the button, and the button was rendered as maybe 2-5px, so clicking on the actual button was near impossible. I fixed it by adding the styling to the button itself.
* I set up my verses schema in a convoluted nested travesty...
* My verses schema was setup as an array holding an object holding objects of arrays - This caused issues trying to use API calls
    * I had to redo my verses schema so there wasn't a deeply nested array that I needed to access.
#### Things I learned
- Webhooks [https://simonfredsted.com/1583]
* Webhooks allow for API's to send if data has been updated
    * In programming, the word “hook” comes from the phrase “hooking into” something, so a Webhook is hooking into an event, or making the application call it whenever the event happens. The application has a list of hooks that must be notified whenever a given action occurs, but since Webhooks are usually asynchronous, the application doesn’t wait for a response. In your example, let’s say there’s an app that has created a Webhook for when you’re picking up your keys from the table (before going outside) — the event. When called, it can then check the weather and send you an alert on your phone saying that it’s raining. - Simon Fredsted
- Speech Recognition API
- Contact Form with nodemailer in the backend to send mail over smtp
- User authentication in MERN stack using JWT tokens, bcrypt
- Using cookies to store user sign-in information
- Investing time to research the material I will be using (APIs, Libaries) is crucial.