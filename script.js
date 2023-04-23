document.querySelector('.convertBtn').addEventListener('click', () => {
  let inputText = document.querySelector('.textInput').value;
  // console.log(inputText)
  let dataCh = inputText.split(/\n/);
  document.querySelector('.textResult').value = '';
  for (i = 0; dataCh[i]; i++) {
    let channel2 = dataCh[i];
    let splitted = channel2.split('/');
    let checkerStr = splitted[3];
    let firstChar = splitted[3].charAt(0)



    if (checkerStr == 'channel') {
      console.log(splitted[4]);
      document.querySelector('.textResult').value += `https://www.youtube.com/channel/${splitted[4]}\n`;
    } else if (checkerStr == 'c') {
      fetching(splitted[4]);
    } else if (checkerStr == 'user') {
      fetching(splitted[4]);
    } else if (firstChar == '@') {
      fetching(splitted[3].slice(1));
    }
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

