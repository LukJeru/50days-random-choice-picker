const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus() //automatically focus on element

textarea.addEventListener('keyup', (e)=> {
  createTags(e.target.value) //pass e.target.value to function createTags on each keyup event
  //e.target.value gets value of input in textarea

  if(e.key === 'Enter') {
    setTimeout(()=>{
      e.target.value = ''
    }, 10)
    randomSelect()
  }
})

function createTags(input) {    //filter out white space        //trim array elements of white space
  const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())

  tagsEl.innerHTML = ""

  tags.forEach(tag => {
    const tagEl = document.createElement('span')
    tagEl.classList.add('tag')
    tagEl.innerText = tag
    tagsEl.appendChild(tagEl)
  })
}

function randomSelect() {
  const times = 30

  const interval = setInterval(() => {
    const randomTag = pickRandomTag()

    highlightTag(randomTag)
    setTimeout(() => {
      unHighlightTag(randomTag)
    }, 100)
  }, 100);

  setTimeout(() => {
    clearInterval(interval)

    setTimeout(() => {
      const randomTag = pickRandomTag()
      highlightTag(randomTag)
    }, 100);
  }, times * 100);
}

function pickRandomTag() {
  const tags = document.querySelectorAll('.tag')
  return tags[Math.floor(Math.random() * tags.length)]
}


function highlightTag(tag) {
  tag.classList.add('highlight')
}

function unHighlightTag(tag) {
  tag.classList.remove('highlight')
}
