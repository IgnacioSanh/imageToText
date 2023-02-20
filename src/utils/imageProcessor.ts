async function imageToText(imageUri: string, imageName: string = 'image') {
  const formData = new FormData();
  formData.append('image', {
    uri: imageUri,
    name: 'image',
    type: 'image/jpeg',
  });
  const result = await axios.post(
    'https://api.api-ninjas.com/v1/imagetotext',
    formData,
    {
      headers: { 'X-Api-Key': 'V16CVG4OUBL+mJ41VKqfZQ==5GtmEFnm58ofIm0L' },
    },
  );
  console.log(result.data);
}

export default {
  imageToText,
};
