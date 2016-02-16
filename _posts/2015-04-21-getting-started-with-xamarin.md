---
layout: post
title: "Getting started with Xamarin"
author: Eddie Rangel
subtitle: "and introduction"
category: Software
tags: [Xamarin, C#]
---

#####An Introduction
Over the next several weeks I will be writing several blog posts that will provide an introduction to Cross Platform Development with Xamarin. This will be my first post in the series. 

#####What is Xamarin?
[Xamarin](http://www.xamarin.com) is a suite of application tools that allow you to build cross-platform applications. Xamarin uses an open source implementation of the .Net Framework, [Mono](http://www.mono-project.com/). Mono provides a set of Base Class Libraries that provide the foundation which an application can be built. Mono also includes a set of Mono Class Libraries that go beyond what the BCL's provide.

From a developers perspective, you can leverage your knowledge of the C# Programming language and the .Net Framework to build native applications across iOS, Android, Mac, and Windows. 

#####How to get started?
You can start by downloading the Xamarin Platform for either OS X or Windows from their [download](https://xamarin.com/download) page. You'll have to provide them some details. They offer a pricing tier which ranges from free for a Starter Edition to an Enterprise Edition for under $1900. They also offer [Student](https://xamarin.com/student) license, so if you're a student make you fill out their student form. 


#####Hello World an iOS App
For this demonstration you will need at least the Indie license given that we will be building a Xamarin Forms app. Also, I will be using Xamarin Studio on OS X Yosemite so this means you will need XCode installed. To build an iOS App, a Mac is a prerequisite. However, If you're only concerned with Android you could go through this demo on a Windows Desktop. You will need to do some additional work to configure [Android Player](https://xamarin.com/android-player). Although it's still in Beta, it works fine for our Demo. Feel free to give it a whirl.

* Launch Xamarin Studio from the Launchpad
* File -> New Project -> in the New Solution dialog, in the left pane, choose Mobile Apps under C#
* Choose Blank App (Xamarin.Forms Portable)
![](/content/images/2015/04/Screen-Shot-2015-04-21-at-9-39-53-AM.png)

* Name your Solution 'FormsDemo'

Xamarin Studio will do it thing and create a few projects for you to get started. You should have a FormsDemo project that will provide all the back end code for your two platform specific projects to share. You should also see a FormsDemo.Droid and a FormsDemo.iOS. Those are you two platform specific projects.

Before we start coding we will Right Click on the FormsDemo solution, and Update NuGet packages. This will ensure we are using the latest bits. 

Ensure you have FormsDemo.iOS selected as the Startup Project and that you're project is set to Debug with an iOS Simulator. I will be using iPhone 6 iOS 8.3 for this. Then hit the play button to Launch. 

![](/content/images/2015/04/Screen-Shot-2015-04-21-at-9-51-05-AM.png)

And with that, you have successfully created an iOS Application using Xamarin Studio.


