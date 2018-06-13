emblem (emblem_Jint-Intj)

The makings of a bespoken user-maintainable form of ID – often referred to as an emblem.

##Foreword

Thank you for visiting my emblem repo! In so many words, I’m advancing a user maintainable form of id, which I often refer to as an emblem. The project is truly within its’ infancy, and a huge objective of mine is to it actively advance it as an open-source project. This readme.md will be rough around the edges, predominantly because my aim was to make a huge dent towards that objective with the repo’s current 06.12.18 commit. Then take a week-long cold shower to gauge what I’m missing, what has worked to date. An occasional cold shower or two can be pretty clutch for bootstrapped projects such this one, wu wu wu (don’t stress if that last one goes over your head).  At any rate, I’ve prepared this text with experienced developers as its’ target audience in mind. I’m very new coding, so I figured it would be helpful for developers interested in gaining a decent amount of perspective related to the code contained within this repo – prior to potentially developing with it within a testing environment.

Also, I’m stating experienced developers as the target audience, in large part because I’m relying on your expertise to infer from my attempts at using any technical terminology (or even syntax) specific to your profession. The repo is currently functional to extents I will demonstrate, but it’s equally messy as well. I’m sure there’s a handful of textbook examples of what not to do littered about.  Moreover, even in the event you are an exceptional developer, please be sure to keep in mind that this repo contains an abundance of external dependencies, some of which relate to blockchain technology platforms and node.js. It should be thoroughly evaluated as an exceptionally experimental repository of code prior to testing locally. Hence, If you were to get around to providing any form of insight, I would be extremely grateful – knowing what it entailed. In terms of this project’s deployment activities, I just want to note those as truly distant interest - third to collaboration and to transparency.  Considering my experience level in regards to coding, I figured that statement could put some minds at ease. Lastly, there’s lots of words below, but it’s really not that bad! So, here we go!

## Table of Contents

-   [Installation](#Installation)
-   [Description](#Description)
-   [Usage](#Usage)
-   [Troubleshooting](#Troubleshooting)
-   [ROADMAP.md](#ROADMAP.md)
-   [Contributing](#Contributing)
    -   [General Notes](#General-Notes)
    -   [Beware of Duplicates](#Beware-of-Duplicates)

## Installation

Download to a desktop (ideally) the emblem project’s  zip file, which can be found under my list of repos. It may be helpful to briefly add here that this project’s repo doesn’t truly require an installation to interact with as intended. However, it does require a handful of external packages and also other dependencies in order to run as intended. It’s currently the nature of DApp development I suppose. Nonetheless, the decent list of dependencies can be discerned from a demonstration video I will reference shortly, but - for the diligent types – here’s a quick list of those items:

- Atom (An impromptu note: Congrats to Github’s team related to the recent acquisition!)
- apm
- npm
- Nodemon
- Ganache
- Remix-IDE

## Description

I noted that this project is advancing a user-maintainable form of ID. That description can function as a synapses of sorts for the project, but what exactly does that mean from the perspective of the code contained within this repo? Well, the following few statements will entail my best attempt at answering that question herein - for now (enjoying vcs way too much).  Please excuse any misuse of terminology.

The repo currently contains two principal functionalities – from a code perspective. Firstly, there’s a contract to be encoded and to be deployed from an externally owned account (eoa) within Ethereum's blockchain platform – entailing activities to be coordinated by a given user. Secondly, there’s an application for the user to host as of now on local network, and that application is largely what the emblem repository’s of code represents to date.  A wordy attempt so far, right!? I still don’t like it. In contrast, one thing I’m fairly confident of is that out of the size able pool of remarkable DApps structured for Ethereum’s platform, the code I’ve drafted for this project’s contract may very well be one of the most modest examples of a use case. Essentially, it may include one of the lowest character counts. That was the complete opposite of a self-appraisal, but an important consideration in terms of portraying the scope of the project.

Overall, the concept is for a given user to maintain two values, which as of now can be discerned as the following two variables: penname, and version. From an integrated perspective of those two principal functionalities, the application provides rather exhaustive list of validation controls afforded to both a given user and to those requesting to view that user’s emblem within a browser.  In gist, a great deal of security can be inferred by transparently creating a means for a user change the state of the version variable associated to the emblem’s stated contract address. This level of functionality has been achieved to date with the code contained within this repo to a worthy extent. For simplicity,  I figured it would be practical to format the project as a use case, so I decided to model it after my own Penname: Jint-intj.

## Usage

Visual demonstration can be accessed with the following URL: youtube.com/playlist?list=PLwbLKNAzuL2oPQlcaSV501B

## Troubleshooting

As of now, there are three thoughts that come to mind related to testing the repo on a device attached to local internet connection. However, I recommend a review of this documentation foreword section’s notes related to the experimental nature of this repo, before practicing these tips. Moreover these tips are rather impromptu, modeled with my previous test environments in mind (osx, ubuntu 16.04 and 18.04 [desktop], and windows 7), and considering the diversity of devices that could associate to stated audience – I suppose this section should be titled ‘troubleshooting considerations’.  I recommend building from fresh installation of an Ubuntu 18.04 on a device you don’t currently use for internet research or entertainment purposes.  I’m sure you can describe value in that  note better than I can.  Secondly, the steps to needed to actually render the application’s fist view - with the contract’s values  displayed - can be tricky.

I’ve have had success to date making sure every application on desktop is closed,  opening repo within the atom, then following steps included within the repo’s emblem.sol the loosely.  I stated loosely, because it depends on my testing environment. You’ll likely have to change the contract address currently listed under the index.hbs view. Lastly, and a rather annoying one, would be an effort to change the local host name (penname) and url’s associated to those names throughout project repo’s,  and then use your one device’s name.  It’s definitely possible, but I’ve been pushing commits to demonstrate what deployment would look like without actually deploying it. That Implies a lot, and I don’t currently have a brief tip for this one. I may have something helpful backed up some where. Just give me an idea of the demand to find it, reformat it, and I’ll see what I can do.

## ROADMAP.md

Documentation pertaining to the project’s Roadmap will be eventually accessible at the following URL: [insert url/path here]. The current state of that file is an incomplete rough draft. In other words, that file can be perhaps more accurately stated as a brain storming exercise for me to conform into complete drafts in the near future.

## Contributing

### General Notes

This project is free and will remain free. Documentation pertaining to this section, or rather details related to contributing to this project will be eventually accessible at the following URL: [insert url/path here]. The current state of the text that Contributing.md file will contain is under development as well within the previously mentioned roadmap.md document.

### Beware of Duplicates

There isn’t truly a precedent for me to associate with this warning, but I think it’s important to the extent that this project is free and will remain free. I’m making considerable strides towards demonstrating my penname (JINT-INTJ) activities to all. As part of that effort, to ensure there’s a reasonable amount of ease for others to access what this repo aim’s to ultimately display (an emblem) within a given browser, I’ve created my other repo as a temporary homepage.  Here’s the URL: jint-intj.github.io/emblem-homepage/.  When in doubt for the time being, please refer there.
