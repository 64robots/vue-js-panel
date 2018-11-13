const fs = require('fs')
const path = require('path')
const componentNames = require('./component-names')

const indexFileContent = `\

${componentNames
  .map(componentName => `import ${componentName} from './${componentName}'`)
  .join('\n')}

// Export components individually
export { ${componentNames.map(componentName => componentName).join(', ')} }

// What should happen if the user installs the library as a plugin
function install(Vue) {
${componentNames
  .map(componentName => `  Vue.component('${componentName}', ${componentName})`)
  .join('\n')}
}

// Export the library as a plugin
export default { install: install }
`

fs.writeFileSync(path.resolve(__dirname, '../src/index.js'), indexFileContent)
