# Mobile Bazaar


![mockup](https://github.com/tenthirtyone/mobile-bazaar/blob/develop/Mockup.png)

Mobile Bazaar is an AngularJS mobile front end for Open Bazaar for Android.

# What is Open Bazaar?

OpenBazaar is an open source project to create a decentralized network for peer to peer commerce online—using Bitcoin—that has no fees and no restrictions.

Right now, online commerce means using centralized services. eBay, Amazon, and other big companies have restrictive policies and charge fees for listing and selling goods. They only accept forms of payment that cost both buyers and sellers money, such as credit cards or PayPal. They require personal information, which can lead to it being stolen or even sold to others. Buyers and sellers aren’t always free to exchange goods and services with each other, as companies restrict entire categories of trade.

OpenBazaar is a different approach to online commerce. It puts the power back in the users’ hands. Instead of buyers and sellers going through a centralized service, OpenBazaar connects them directly. Because there is no one in the middle of your transactions there are no fees, no restrictions, no accounts to create, and you only reveal the personal information that you choose.
### Version
Alpha? Just getting started

### Installation

You need OpenBazaar-Server running on your server. See https://github.com/OpenBazaar/OpenBazaar-Server with a username/password. Add the OB username/password to the config file in 'mobile-bazaar/backend/default.json' for OBUSERNAME/OBPASSWORD.

You need Gulp installed globally:

```sh
$ npm i -g gulp
```

```sh
$ git clone https://github.com/tenthirtyone/mobile-bazaar.git
$ cd mobile-bazaar/backend
$ npm install
$ node app.js

$ cd mobile-bazaar/frontend
$ npm install && bower install
$ gulp
```

Site builds to the 'build' folder in the mobile-bazaar directory. Apache Cordova has not been setup yet. 

License
----

MIT
