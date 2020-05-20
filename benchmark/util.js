module.exports.addHtmlRow = (parent, content) => {
  if (global && global.document) {
    const splittedContent = content.split(' x ')
    const tr = document.createElement('tr')

    tr.innerHTML = `
      <td>${splittedContent[0]}</th>
      <td>${splittedContent[1]}</th>
    `

    document.querySelector(`#${parent}`).appendChild(tr)
  }
}
