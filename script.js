document.querySelector('.convertBtn').addEventListener('click', () => {
  let inputText = document.querySelector('.textInput').value;
  console.log(inputText)
  let dataCh = inputText.split(/\n/);
  document.querySelector('.textResult').value = '';
  for (i = 0; dataCh[i]; i++) {
    let channel2 = dataCh[i];
    fetching(channel2.slice(25));
  }

  function fetching(channel2) {
    fetch(`https://yt.jaybee.digital/api/channels?part=channels&handle=${channel2}`)
      .then(response => response.json())
      .then(data => {
        let newUrl = `https://www.youtube.com/channel/${data.items[0].id}\n`;
        if ((data.items[0].id)) {
          document.querySelector('.textResult').value += newUrl;
        }
        document.querySelector('.linkTableBody').innerHTML += `<tr>
    <td><a href="${newUrl}" target='_blank'>${channel2}</a></td>
    <td>${newUrl}</td>
  </tr>`
      })
      .catch(err => {
        console.log(err);
        let newUrl = `Not Found`;
        // document.querySelector('.textResult').value += newUrl;

        document.querySelector('.linkTableBody').innerHTML += `<tr>
    <td><a href="${newUrl}" target='_blank'>${channel2}</a></td>
    <td>${newUrl}</td>
  </tr>`
      })
  }
})

