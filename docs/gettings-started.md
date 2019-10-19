# Getting Started

> Boost your NodeSchool experience to the next level 🚀

[TOC]

## 🖥 Install Node

Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine and is the core technology needed to start the NodeSchool workshops.

First up, let's install `node`!

### 🏁 Windows

You can [download](https://nodejs.org/dist/v10.15.3/node-v10.15.3-x86.msi) the offical installer from the [nodejs website](https://nodejs.org/).

Open the installer via a double-click and follow the installation process.

After the installation, open a console or Powershell and type

```bash
node -v
```

It should print something like

```bash
v10.15.3
```

🎉 **Congratulations! You have successfully installed node and are ready to go!** 🎉

### 🍏 macOS

You can [download](https://nodejs.org/dist/v10.15.3/node-v10.15.3.pkg) the official
installer from the [nodejs website](https://nodejs.org/).

After the download, open the installer via a double-click and follow the installation process.

If you have, [Homebrew](https://brew.sh/) installed you can install node via

```bash
brew install node
```

After the installation, open a terminal and type

```bash
node -v
```

It should print something like

```bash
v10.15.3
```

🎉 **Congratulations! You have successfully installed node and are ready to go!** 🎉

### 🐧 Linux

The easiest way to use node on Linux is via [nvm](https://github.com/creationix/nvm)

To install nvm open a terminal and type

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.0/install.sh | bash
```

or Wget

```bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.0/install.sh | bash
```

<sub>The script clones the nvm repository to `~/.nvm` and adds the source line to your profile (`~/.bash_profile`, `~/.zshrc`, `~/.profile`, or `~/.bashrc`).</sub>
<sub>**Note:** If the environment variable `$XDG_CONFIG_HOME` is present, it will place the `nvm` files there.</sub>

After running the install script, if you get `nvm: command not found` or see no feedback from your terminal after you type

```bash
command -v nvm
```

Close your current terminal, open a new terminal, and try verifying again.

To install the latest lts version of node type

```bash
nvm install lts/dubnium
```

Check if node is installed via

```bash
node -v
```

It should print something like

```bash
v10.15.3
```

🎉 **Congratulations! You have successfully installed node and are ready to go!** 🎉

## 📝 Choose An Editor

The code editor is one of the most important things for a professional developer.
Depending on your needs, you can choose between different free options.

### Atom

[Atom](https://atom.io/) is a hackable text editor for the 21st Century. It is developed by [GitHub](https://github.com/) and completly open source. Like [Visual Studio Code](https://code.visualstudio.com/) , [Atom](https://atom.io/) is based on Electron, a framework for cross-platform desktop apps. You can download [Atom](https://atom.io/) for [Windows](https://atom.io/download/windows), [macOS](https://atom.io/download/mac) and [Linux](https://atom.io/download/linux) for free.

### Visual Studio Code

[Visual Studio Code](https://code.visualstudio.com/) ( also called vscode) is a free text editor developed by Microsoft. Like [Atom](https://atom.io/) it is also based on Electron to enable a cross-platform experience. [Visual Studio Code](https://code.visualstudio.com/) comes with some built-in functionalities like syntax highlighting, debugging, version control, or auto-completion. Today vscode is one of the most used editors by web developers. You can download [Visual Studio Code](https://code.visualstudio.com/) for [Windows](https://code.visualstudio.com/docs/?dv=win32user), [macOS](https://code.visualstudio.com/docs/?dv=osx) and [Linux](https://code.visualstudio.com/#alt-downloads).

### Brackets

[Brackets](http://brackets.io/) is a modern, open-source text editor that understands web design developed by Adobe. It has features like a live preview, preprocessor support, inline editors, and many more. You can download [Brackets](http://brackets.io/) for [Windows](https://github.com/adobe/brackets/releases/download/release-1.13/Brackets.Release.1.13.msi), [macOS](<Download Brackets 1.13>) and [Linux](https://github.com/adobe/brackets/releases/download/release-1.13/Brackets.Release.1.13.64-bit.deb).

### Vim

Vim is an improved version of the original VI and a free terminal-based text editor. Vim is available on many operating systems like Linux, Windows, BSD, ..., and ships with every copy of macOS. Despite the availability in most of the operating systems, we would only encourage advanced users to use vim in NodeSchool.

### Other Alternatives

We haven't talked about a lot of other IDEs and text editors. [Sublime Text](https://www.sublimetext.com/), [WebStorm](https://www.jetbrains.com/webstorm/), [Visual Studio](https://visualstudio.microsoft.com/), [Eclipse](https://www.eclipse.org/downloads/packages/release/2019-09/r/eclipse-ide-web-and-javascript-developers-includes-incubating-components) ... and many more. Despite their greatness, most of them aren't available for free ☹️, but if you already have a copy and are used to them, feel free to use it!

## 🚀 Getting the most out of NodeSchool

Here are some basic tricks to improve your NodeSchool experience and help you to get a better developer.

### Find a partner

It is always better to work in pairs. Try to find a partner at the start of the NodeSchool event. Even if he or she is more experienced than you, you can help and learn from each other, and it is always more fun to do stuff together!

### Collaborate

Have no partner, but want to share or discuss your solution/experience with others? Don't hesitate! Just do it! There is always not only one correct solution and talking about that is a daily business as a developer. Collaborating with others helps you think about other solutions.

### Ask a Mentor if you are stuck

If you feel stuck and frustrated, don't hesitate to ask one of the mentors for help. They gladly help you and maybe give you the deciding hint to solve your struggle!

### Connect with other people

Connecting with people is everything! Maybe most of your friends don't do a lot of programming (maybe no programming at all). Here at NodeSchool, you have the chance to connect to people with the same interests, find a mentor, or get to know new people. Share your phone numbers, emails, twitter username, Instagram accounts, or whatever you like.

### Give Feedback

We always want to improve NodeSchool and help you feel comfortable, so we appreciate any feedback. Feel free to share your opinions with us anytime!
