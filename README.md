# Image to Text translator

This app is part of the 10 days challenge for [Globant's dojo](https://sites.google.com/globant.com/tp-dojo/challenges-by-web-ui/image-to-text-translator).

The following libraries were used as dependency in this app:

- **fortawesome**: Font Awesome icon library.
- **@vitalets/google-translate-api**: Library to translate text using the Google Translate API.
- **axios**: To create all the API calls.
- **date-fns**: to format dates.
- **lodash**: used as utility for groupBy dates into a specific format.
- **react-native-dotenv**: usage of the .env file into the app.
- **react-native-date-picker**: To use the filter date picker.
- **react-native-image-picker**: To pick between an image from the gallery or take a picture.
- **react-native-swipe-list-view**: To create the item swipe to delete effect.
- **react-native-toast-message**: Shows toast messages for success, error, or info messages.
- **styled-components**: For styling the app instead of using react native's StyleSheet.
- **@testing-library/react-native**: For component testing.

## Install the app

First, you need to have the environment setup as suggested by [React Native](https://reactnative.dev/docs/environment-setup). It's recommended to use
any version manager for Ruby (for example [rbenv](https://github.com/rbenv/rbenv)), same for Node ([NVM](https://github.com/nvm-sh/nvm)) and Java ([sdkman](https://sdkman.io/install)). This application was created using the **React Native CLI**.

Once you have the environment ready, install the dependencies using `yarn add`.
After that, you can start metro, the React Native Bundler. From there, you can start right away the app, selecting which OS you would like to run it. As an alternative, you can open a new tab in the terminal (leaving metro running in another instance), and execute the specific OS you need:
- `yarn ios` for iOS. Also, you can add the simulator parameter to run in a specific device: `yarn ios --simulator='<device name>'`.
- `yarn android` for Android. To run in a specific emulator, you just need to have that simulator already up and running.

## Screenshots

<div style="display: flex; flex-direction: row;">
  <img src="https://user-images.githubusercontent.com/18095479/221674464-3b16956c-1164-44b6-9718-98fed1d319a2.png" height="500px" />
  <img src="https://user-images.githubusercontent.com/18095479/221675704-39aa0af1-0876-4496-8bb3-c5ced9f0a159.png" height="500px" />
  <img src="https://user-images.githubusercontent.com/18095479/221676016-94309b39-7c82-4a57-b40f-9842c586c8ac.png" height="500px" />
  <img src="https://user-images.githubusercontent.com/18095479/221680435-72d5fccd-3dad-4052-a4c0-42e87d8710d3.png" height="500px" />
  <img src="https://user-images.githubusercontent.com/18095479/221680879-e56cb5c9-783b-44b9-bc7a-edab05488cc0.png" height="500px" />
  <img src="https://user-images.githubusercontent.com/18095479/221681047-c83c6957-e3db-431b-9870-5d34b2e7102c.png" height="500px" />
  <img src="https://user-images.githubusercontent.com/18095479/221681235-b12d49ab-47a5-4074-b2f9-1e6b84e41be2.png" height="500px" />
  <img src="https://user-images.githubusercontent.com/18095479/221681440-7f21f9bc-d73d-4877-afe0-5e1716536603.png" height="500px" />
</div>

## Using the app
As the screenshots shows, the flow is the following:
- Select an image, either from the gallery or the camera.
- The image will process automatically to text and translation.
- Input a name for the image and press the save button.
- The image will be displayed in a list, grouped by month and year.
- You can filter by date and/or by name. To remove the filter, press the buttons that appears below. To search a file name, you need to press the zoom icon button.

Inside the code, there are options that you can enable/disable to mock some results.
In `src/screens/AddImage/AddImage.tsx` line 28 and 29, you can change the value to true to mock the response of the API. This is because the API sometimes fails when you make too much requests in short period of time.
In `src/screens/Home/sections/ImageList/ImageList` line 20, you can see how it looks with mocked results for different days.

## Improvements for the future
- Improve the unit and component testing.
- Create integration tests.
- Improve the search by name method.
- Fetch the device language to change the translation destination language.
- Preserve the state in Context API using local storage (since we don't have an API).
- Create a Detail screen, so we can see previous results from the list.
