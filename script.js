document.querySelector('.convertBtn').addEventListener('click', () => {
  inputText = document.querySelector('.textInput').value;
  console.log(inputText)
  dataCh = inputText.split(/\n/);
  document.querySelector('.textResult').value = '';
  for (i = 0; dataCh[i]; i++) {
    channel2 = dataCh[i];
    fetching(channel2);
  }

  function fetching(channel2) {
    fetch(`https://yt.jaybee.digital/api/channels?part=channels&handle=${channel2}`)
      .then(response => response.json())
      .then(data => {
        if(!(data.items[0].id)){
          newUrl = `https://www.youtube.com/channel/${data.items[0].id}\n`;
          document.querySelector('.textResult').value += newUrl;
        }

        document.querySelector('.linkTableBody').innerHTML += `<tr>
    <td><a href="${newUrl}" target='_blank'>${channel2}</a></td>
    <td>${newUrl}</td>
  </tr>`
      })
      .catch(err => {
        newUrl = `Not Found`;
        document.querySelector('.textResult').value += newUrl;

        document.querySelector('.linkTableBody').innerHTML += `<tr>
    <td><a href="${newUrl}" target='_blank'>${channel2}</a></td>
    <td>${newUrl}</td>
  </tr>`
      })
  }
})

