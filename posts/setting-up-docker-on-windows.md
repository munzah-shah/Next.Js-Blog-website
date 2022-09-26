---
title: "Installing and Setting up Docker on Windows"
date: "2022-09-27"
category: "Tech/Platforms/Docker"
---

This guide is specific to Windows (I am using Windows 10, however, it should work on other versions of Windows too). Let's jump into the most straighforward Docker installation guide ever :D

- Step # 01: Checking the requirements

  - Enable Virtualization on your machine: It is usually enabled by default, if not, go to Boot setup (f10 for HP elitebook - you can search for your laptop model) and enable from system settings. [Follow this for further guidance](https://www.youtube.com/watch?v=MOuTxfzCvMY).

  - Enable Hyper-V on your machine: Go to "Apps and Features" by right clicking on the windows button in taskbar. From there, select "Program and features" on the right under "Related Settings". Click "Turn windows features on and off" from the left navigation menu. Look for "Hyper V" in the list and check the box. Hit "Ok" and you're done. Don't forget to restart your computer after Hyper-V installation.

  - Install WSL 2 on your machine: The official document says it all. Follow the steps 1 to 5 in [this](https://docs.microsoft.com/en-us/windows/wsl/install-manual#step-3---enable-virtual-machine-feature) documentation to get WSL up and running.

- Step # 02: Installing Docker

  After setting up the environment and passing all requirement checks, let's now move on to installation and a basic "get started with docker" tutorial that you can follow.

  - Download the docker installer.
  - Create and account (optional but recommended for future usage).
  - After installation, copy the command you see on your dashboard and paste it in your cmd.
  - Then open your browser and type in “localhost”.
  - Follow the tutorial written there. The link to tutorial is [this](http://localhost/tutorial/).
