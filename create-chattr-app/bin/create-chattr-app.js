#!/usr/bin/env node

const { execSync } = require('child_process')
const { join } = require('path')

function installDependencies(appName) {
  const destinationPath = join(process.cwd(), appName)

  try {
    console.log('Installing dependencies...')
    execSync('npm install', { cwd: destinationPath, stdio: 'inherit' })
  } catch (error) {
    console.error('Error installing dependencies:', error)
  }
}

function createChattrApp(appName) {
  const destinationPath = join(process.cwd(), appName)

  try {
    console.log(
      `${
        appName === '.'
          ? 'Creating Chattr App...'
          : `Creating Chattr App '${appName}'...`
      }`
    )

    execSync(
      `git clone https://github.com/christianbmartinez/create-chattr-app ${destinationPath}`,
      {
        stdio: 'inherit',
      }
    )

    console.log(
      `${
        appName === '.'
          ? 'create-chattr-app created successfully!'
          : `create-chattr-app '${appName}' created successfully!`
      }`
    )
    console.log(
      `${
        appName === '.'
          ? 'Navigate to your root folder and start building your new chattr project!'
          : `Navigate to '${appName}' and start building your new chattr project!`
      }`
    )

    installDependencies(appName)
  } catch (error) {
    console.error('Error:', error)
  }
}

const appName = process.argv[2]

if (!appName) {
  console.error('Please provide an app name.')
  process.exit(1)
}

createChattrApp(appName)
