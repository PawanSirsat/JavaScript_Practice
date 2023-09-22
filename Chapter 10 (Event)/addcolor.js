const applyClassButton = document.getElementById('applyClass')
const elementToStyle = document.getElementById('elementToStyle')
const newColor = document.getElementById('coloradd')
const newc = document.getElementById('new')
const newc2 = document.getElementById('new2')

const validColors = [
  'red',
  'blue',
  'green',
  'yellow',
  'orange',
  'purple',
  'pink',
  'brown',
  'gray',
  'black',
  'white',
  'cyan',
  'magenta',
  'lime',
  'teal',
  'indigo',
  'maroon',
  'navy',
  'olive',
  'silver',
]

applyClassButton.addEventListener('click', () => {
  const colorDiv = document.createElement('div')
  colorDiv.style.color = newColor.value

  if (validColors.includes(newColor.value) || colorDiv.style.color !== '') {
    console.log('User entered a valid color.') // User input is correct
    const style = document.createElement('style')

    // Define the CSS rule for the custom class and properties
    const cssRule = `.${newColor.value} { background-color: ${newColor.value};
  color: white;
  text-transform: uppercase;
  font-size: 2rem;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS'; }`

    if (newc.textContent == '') {
      newc.textContent += newColor.value
    } else {
      newc.textContent += `, ${newColor.value}`
    }
    // Append the CSS rule to the style element
    style.appendChild(document.createTextNode(cssRule))

    // Append the style element to the document's head
    document.head.appendChild(style)

    // Add the custom class to the element
    elementToStyle.classList.add(`${newColor.value}`)
  } else {
    console.log('User entered an invalid color.') // User input is incorrect
    document.querySelector('#validalert').textContent = 'Enter Valid Color'
    document.querySelector('.alert').style.display = 'flex'
    document.querySelector('.overlay').style.display = 'block'
  }
})

const printClassNamesButton = document.getElementById('printClassNames')

printClassNamesButton.addEventListener('click', () => {
  // Check if a link element with the specified href already exists
  if (document.querySelector('link[href="color.css"]')) {
    // Create a new link element for the external CSS file
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'color.css'

    // Add the link to the document's head
    document.head.appendChild(link)

    // Wait for the CSS file to load
    link.onload = () => {
      // Get all the style sheets in the document
      const stylesheets = document.styleSheets

      // Loop through all the style sheets
      for (let i = 0; i < stylesheets.length - 2; i++) {
        const stylesheet = stylesheets[i]

        // Check if the stylesheet's href matches the specific CSS file
        if (stylesheet.href === link.href) {
          const rules = stylesheet.rules || stylesheet.cssRules

          if (rules) {
            // Loop through the rules and log class names
            for (let j = 0; j < rules.length; j++) {
              const rule = rules[j]
              if (rule.selectorText && rule.selectorText.startsWith('.')) {
                const className = rule.selectorText.substring(1) // Remove the leading dot
                console.log(className)

                if (newc2.textContent == '') {
                  newc2.textContent += className
                } else {
                  newc2.textContent += `, ${className}`
                }
              }
            }
          }
        }
      }
    }
  }
})
