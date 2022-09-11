"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[118],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),h=o,k=u["".concat(l,".").concat(h)]||u[h]||d[h]||r;return n?a.createElement(k,s(s({ref:t},p),{},{components:n})):a.createElement(k,s({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1999:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),s=["components"],i={title:"How to release",sidebar_position:2},l=void 0,c={unversionedId:"how-to-release",id:"how-to-release",title:"How to release",description:"This article mainly introduces how the Release Manager releases a new version in accordance with the Apache requirements.",source:"@site/community/how-to-release.md",sourceDirName:".",slug:"/how-to-release",permalink:"/zh-CN/community/how-to-release",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"How to release",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"How to vote a Committer or PMC",permalink:"/zh-CN/community/how-to-vote-a-committer-pmc"},next:{title:"How to verify release",permalink:"/zh-CN/community/how-to-verify"}},p={},d=[{value:"Prolegomenon",id:"prolegomenon",level:2},{value:"Adding PG KEY",id:"adding-pg-key",level:2},{value:"Install gpg",id:"install-gpg",level:3},{value:"Generate gpg Key",id:"generate-gpg-key",level:3},{value:"Attentions\uff1a",id:"attentions",level:4},{value:"Generate the key as prompt",id:"generate-the-key-as-prompt",level:4},{value:"upload your key to public gpg keyserver",id:"upload-your-key-to-public-gpg-keyserver",level:3},{value:"Check whether the key is created successfully",id:"check-whether-the-key-is-created-successfully",level:3},{value:"Add your gpg public key to the KEYS document",id:"add-your-gpg-public-key-to-the-keys-document",level:3},{value:"Add the public key to KEYS in the dev branch to release the RC version",id:"add-the-public-key-to-keys-in-the-dev-branch-to-release-the-rc-version",level:4},{value:"Add the public key to the KEYS in the release branch for releasing official version",id:"add-the-public-key-to-the-keys-in-the-release-branch-for-releasing-official-version",level:4},{value:"Upload the GPG public key to your Github account",id:"upload-the-gpg-public-key-to-your-github-account",level:3},{value:"create tag",id:"create-tag",level:3},{value:"Upload tar file to dist repo",id:"upload-tar-file-to-dist-repo",level:3},{value:"Checkout Kvorcks to local directory",id:"checkout-kvorcks-to-local-directory",level:3},{value:"Add public key to KEYS file adn commit to SVN repository",id:"add-public-key-to-keys-file-adn-commit-to-svn-repository",level:3},{value:"Voting",id:"voting",level:2},{value:"Kvrocks community vote",id:"kvrocks-community-vote",level:3},{value:"Vote template",id:"vote-template",level:4},{value:"Vote Result template",id:"vote-result-template",level:4},{value:"Incubator community vote",id:"incubator-community-vote",level:3},{value:"Vote template",id:"vote-template-1",level:4},{value:"Vote Result template",id:"vote-result-template-1",level:4},{value:"Officially released",id:"officially-released",level:2},{value:"Move source code and binary package from DEV to release repository on SVN.",id:"move-source-code-and-binary-package-from-dev-to-release-repository-on-svn",level:3},{value:"Check whether the dev and release is correct",id:"check-whether-the-dev-and-release-is-correct",level:3},{value:"Update links on official website",id:"update-links-on-official-website",level:3},{value:"Send email to <code>dev@kvrocks.apache.org</code> and CC <code>announce@apache.org</code>",id:"send-email-to-devkvrocksapacheorg-and-cc-announceapacheorg",level:3}],u={toc:d};function h(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This article mainly introduces how the Release Manager releases a new version in accordance with the Apache requirements.")),(0,r.kt)("h2",{id:"prolegomenon"},"Prolegomenon"),(0,r.kt)("p",null,"Source Release is the key point which Apache values, also, is necessary for a release;\nBinary Release is optional. Kvrocks can choose whether to release the binary package to the Apache repository or not."),(0,r.kt)("p",null,"Note that for binary distribution packages, it is necessary to check that the new version does not contain third-party dependencies."),(0,r.kt)("p",null,"For more guideline, you can refer the following links:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://infra.apache.org/release-publishing.html"},"ASF Release Creation Process")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.apache.org/legal/release-policy.html"},"ASF Release Policy")),(0,r.kt)("h2",{id:"adding-pg-key"},"Adding PG KEY"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Ref\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://infra.apache.org/openpgp.html"},"https://infra.apache.org/openpgp.html"),"\n",(0,r.kt)("strong",{parentName:"p"},"This section is the requirements for release manager who is the first time to be a release manager"))),(0,r.kt)("h3",{id:"install-gpg"},"Install gpg"),(0,r.kt)("p",null,"For more details, please ref to ",(0,r.kt)("a",{parentName:"p",href:"https://www.gnupg.org/download/index.html"},"Official website"),", configurations under Mac OS:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ brew install gpg\n$ gpg --version #check the version, should be 2.x\n")),(0,r.kt)("h3",{id:"generate-gpg-key"},"Generate gpg Key"),(0,r.kt)("h4",{id:"attentions"},"Attentions\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Name is best to keep consistent with your full name of Apache ID"),(0,r.kt)("li",{parentName:"ul"},"Email should be the Apache email"),(0,r.kt)("li",{parentName:"ul"},"Name is best to only use English to avoid garbled")),(0,r.kt)("h4",{id:"generate-the-key-as-prompt"},"Generate the key as prompt"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\u279c  ~ gpg --full-gen-key\ngpg (GnuPG) 2.2.20; Copyright (C) 2020 Free Software Foundation, Inc.\nThis is free software: you are free to change and redistribute it.\nThere is NO WARRANTY, to the extent permitted by law.\n\nPlease select what kind of key you want:\n   (1) RSA and RSA (default)\n   (2) DSA and Elgamal\n   (3) DSA (sign only)\n   (4) RSA (sign only)\n  (14) Existing key from card\nYour selection? 1 # input 1\nRSA keys may be between 1024 and 4096 bits long.\nWhat keysize do you want? (2048) 4096 # input 4096\nRequested keysize is 4096 bits       \nPlease specify how long the key should be valid.\n         0 = key does not expire\n      <n>  = key expires in n days\n      <n>w = key expires in n weeks\n      <n>m = key expires in n months\n      <n>y = key expires in n years\nKey is valid for? (0) 0 # input 0\nKey does not expire at all\nIs this correct? (y/N) y # input y\n\nGnuPG needs to construct a user ID to identify your key.\n\nReal name: Hulk Lin               # input your name\nEmail address: hulk@apache.org    # input your emal\nComment:                          # input some annotations, optional\nYou selected this USER-ID:\n    \"Hulk <hulk@apache.org>\"\n\nChange (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit? O # input O \nWe need to generate a lot of random bytes. It is a good idea to perform\nsome other action (type on the keyboard, move the mouse, utilize the\ndisks) during the prime generation; this gives the random number\ngenerator a better chance to gain enough entropy.\nWe need to generate a lot of random bytes. It is a good idea to perform\nsome other action (type on the keyboard, move the mouse, utilize the\ndisks) during the prime generation; this gives the random number\ngenerator a better chance to gain enough entropy.\n\n# Input the security key\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 Please enter this passphrase                         \u2502\n\u2502                                                      \u2502\n\u2502 Passphrase: _______________________________          \u2502\n\u2502                                                      \u2502\n\u2502       <OK>                              <Cancel>     \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n# key generatio[n will be done after your inputting the key with the following output\ngpg: key E49B00F626B marked as ultimately trusted\ngpg: revocation certificate stored as '/Users/hulk/.gnupg/openpgp-revocs.d/F77B887A4F25A9468C513E9AA3008E49B00F626B.rev'\npublic and secret key created and signed.\n\npub   rsa4096 2022-07-12 [SC]\n      F77B887A4F25A9468C513E9AA3008E49B00F626B\nuid           [ultimate] hulk <hulk@apache.org>\nsub   rsa4096 2022-07-12 [E]\n")),(0,r.kt)("h3",{id:"upload-your-key-to-public-gpg-keyserver"},"upload your key to public gpg keyserver"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\u279c  ~ gpg --list-keys                                                        \n-------------------------------\npub   rsa4096 2022-07-12 [SC]\n      F77B887A4F25A9468C513E9AA3008E49B00F626B\nuid           [ultimate] hulk <hulk@apache.org>\nsub   rsa4096 2022-07-12 [E]\n\n# command for sending your key id to key server\n$ gpg --keyserver pgpkeys.mit.edu --send-key <key id>\n# Among them, pgpkeys.mit.edu is a randomly selected keyserver, and the keyserver list is: https://sks-keyservers.net/status/, which is automatically synchronized with each other, you can choose any one of them.\n")),(0,r.kt)("h3",{id:"check-whether-the-key-is-created-successfully"},"Check whether the key is created successfully"),(0,r.kt)("p",null,"Uploading takes about one minute, after that, you can check by your email at ",(0,r.kt)("inlineCode",{parentName:"p"},"http://keys.gnupg.net"),'. Be reminded to tick "the show full-key hashes" under advance.'),(0,r.kt)("h3",{id:"add-your-gpg-public-key-to-the-keys-document"},"Add your gpg public key to the KEYS document"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"SVN is required for this step\nThe svn repository of the DEV branch is: ",(0,r.kt)("a",{parentName:"p",href:"https://dist.apache.org/repos/dist/dev/incubator/kvrocks"},"https://dist.apache.org/repos/dist/dev/incubator/kvrocks"),"\nThe svn repository of the Release branch is: ",(0,r.kt)("a",{parentName:"p",href:"https://dist.apache.org/repos/dist/release/incubator/kvrocks"},"https://dist.apache.org/repos/dist/release/incubator/kvrocks"))),(0,r.kt)("h4",{id:"add-the-public-key-to-keys-in-the-dev-branch-to-release-the-rc-version"},"Add the public key to KEYS in the dev branch to release the RC version"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'\u279c  ~ svn co https://dist.apache.org/repos/dist/dev/incubator/kvrocks /tmp/kvrocks-dist-dev\n# As this step will copy all the versions, it will take some time. If the network is broken, please use svn cleanup to delete the lock before re-execute it.\n\u279c  ~ cd kvrocks-dist-dev\n\u279c  kvrocks-dist-dev ~ (gpg --list-sigs YOUR_NAME@apache.org && gpg --export --armor YOUR_NAME@apache.org) >> KEYS # Append your key to the KEYS file\n\u279c  kvrocks-dist-dev ~ svn add . # It is not needed if the KEYS document exists before.\n\u279c  kvrocks-dist-dev ~ svn ci -m "add gpg key for YOUR_NAME" # Later on, if you are asked to enter a username and password, just use your apache username and password.\n')),(0,r.kt)("h4",{id:"add-the-public-key-to-the-keys-in-the-release-branch-for-releasing-official-version"},"Add the public key to the KEYS in the release branch for releasing official version"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'\u279c  ~ svn co https://dist.apache.org/repos/dist/release/incubator/kvrocks kvrocks-dist-release\n\u279c  ~ cd kvrocks-dist-release\n\u279c  kvrocks-dist-release ~ (gpg --list-sigs YOUR_NAME@apache.org && gpg --export --armor YOUR_NAME@apache.org) >> KEYS   # Append the KEY you generated to the document KEYS, after appending, it is best to check whether it is correct\n\u279c  kvrocks-dist-release ~ svn add . # It is not needed if the KEYS document exists before.\n\u279c  kvrocks-dist-release ~ svn ci -m "Add gpg key for YOUR_NAME" # Later on, if you are asked to enter a username and password, just use your apache username and password.\n')),(0,r.kt)("h3",{id:"upload-the-gpg-public-key-to-your-github-account"},"Upload the GPG public key to your Github account"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Enter ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/settings/keys"},"https://github.com/settings/keys")," to add GPG KEYS."),(0,r.kt)("li",{parentName:"ol"},"Please remember to bind the email address used in the GPG key to your github account (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/settings/emails"},"https://github.com/settings/emails"),')., if you find "unverified" after adding it.')),(0,r.kt)("h3",{id:"create-tag"},"create tag"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Checkout to the RELEASE BRANCH and cherry-pick commits to release"),(0,r.kt)("li",{parentName:"ol"},"Use ",(0,r.kt)("inlineCode",{parentName:"li"},"./x.py package source --version ${release_version}"),"  to create release tarball"),(0,r.kt)("li",{parentName:"ol"},"Make sure it compiles good and push tag to GitHub")),(0,r.kt)("h3",{id:"upload-tar-file-to-dist-repo"},"Upload tar file to dist repo"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"SVN is need in this step, SVN repo for DEV branch is ",(0,r.kt)("a",{parentName:"p",href:"https://dist.apache.org/repos/dist/dev/incubator/kvrocks"},"https://dist.apache.org/repos/dist/dev/incubator/kvrocks"))),(0,r.kt)("h3",{id:"checkout-kvorcks-to-local-directory"},"Checkout Kvorcks to local directory"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# As this step will copy all the versions, it will take some time. If the network is broken, please use svn cleanup to delete the lock before re-execute it.\nsvn co https://dist.apache.org/repos/dist/dev/incubator/kvrocks /tmp/kvrocks-dist-dev\n")),(0,r.kt)("h3",{id:"add-public-key-to-keys-file-adn-commit-to-svn-repository"},"Add public key to KEYS file adn commit to SVN repository"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'cd /tmp/kvrocks-dist-dev\nmkdir ${release_version} # create a directory named by version\ncp /tmp/apache-kvrocks-${release_version}-incubating-src.tar.gz* ${release_version}/ # copy source code and signature package to the versioned directory\nsvn status # check svn status\nsvn add ${release_version} # add to svn\nsvn status # check svn status\nsvn commit -m "Prepare for ${release_version}"     # commit to SVN remote server\n')),(0,r.kt)("h2",{id:"voting"},"Voting"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Kvrocks community vote\uff0csend email to \uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"dev@kvrocks.apache.org"))),(0,r.kt)("h3",{id:"kvrocks-community-vote"},"Kvrocks community vote"),(0,r.kt)("h4",{id:"vote-template"},"Vote template"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"Title\uff1a[VOTE] Release Apache Kvrocks(incubating) ${release_version}\n\nContent\uff1a\n\nHello Apache Kvrocks(incubating) PMC and Community,\n\n    This is a call for a vote to release Apache Kvrocks(incubating) version ${release_version}.\n\n    The tag to be voted on is ${release_version}:\n\n    The release candidate:\n\n    https://dist.apache.org/repos/dist/dev/incubator/kvrocks/${release_version}/\n\n\n    Keys to verify the release candidate:\n\n    https://downloads.apache.org/incubator/kvrocks/KEYS\n\n\n    Git tag for the release:\n\n    https://github.com/apache/incubator-kvrocks/releases/tag/${release_version}\n\n    Please download, verify, and test.\n\n    The VOTE will remain open for at least 72 hours.\n\n    [ ] +1 approve\n    [ ] +0 no opinion \n    [ ] -1 disapprove with the reason\n\n    To learn more about apache kvrocks, please see\n    https://kvrocks.apache.org/\n\n    Checklist for reference:\n\n      [ ] Download links are valid.\n      [ ] Checksums and signatures.\n      [ ] LICENSE/NOTICE files exist\n      [ ] No unexpected binary files\n      [ ] All source files have ASF headers\n      [ ] Can compile from source\n      [ ] All Tests Passed\n\n      More detailed checklist  please refer to:\n      https://kvrocks.apache.org/community/how-to-verify\n\nThanks\n")),(0,r.kt)("h4",{id:"vote-result-template"},"Vote Result template"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"Title\uff1a[RESULT][VOTE] Release Apache Kvrocks(incubating) ${release_version}\n\nContent\uff1a\n\nThe vote to release Apache Kvrocks(Incubating) 2.1.0 has passed.\n\nThe vote PASSED with xxx binding +1 and 0 -1 votes:\n\nBinding votes:\n- Yuan Wang\n- tison\n- hulk\n- Liang Chen\n- Jean-Baptiste Onofr\xe9\n- Xiaoqiao He\n- donghui liu\n\nVote thread:\n\n${vote_thread_url}\n\nThank you to all the above members to help us to verify and vote for the\n${release_version} release. We will move to IPMC voting shortly.\n\nThanks\n")),(0,r.kt)("h3",{id:"incubator-community-vote"},"Incubator community vote"),(0,r.kt)("h4",{id:"vote-template-1"},"Vote template"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"Title\uff1a[VOTE] Release Apache Kvrocks(incubating) ${release_version}\n\nContent\uff1a\n\nHello IPMC,\n\nThe Apache Kvrocks community has voted and approved the release of Apache\nKvrocks(incubating) ${release_version}. We now kindly request the IPMC members\nreview and vote for this release.\n\nKvrocks is a distributed key value NoSQL database that uses RocksDB as the storage engine\nand is compatible with Redis protocol. The current release provides the first official\npackage, resolves all of the license issues, many improvements and fixes many bugs.\n\nKvrocks community vote thread:\n\n${kvrocks_community_vote_thread_url}\n\nVote result thread:\n\n${kvrocks_community_vote_result_thread_url}\n\nThe release candidate:\n\nhttps://dist.apache.org/repos/dist/dev/incubator/kvrocks/${release_version}\n\nThis release has been signed with a PGP available here:\n\nhttps://downloads.apache.org/incubator/kvrocks/KEYS\n\nGit tag for the release:\n\nhttps://github.com/apache/incubator-kvrocks/releases/tag/v${release_version}\n\nBuild guide can be found at:\n\nhttps://github.com/apache/incubator-kvrocks#build\n\nThe vote will be open for at least 72 hours or until the necessary number\nof votes is reached.\n\nPlease vote accordingly:\n[ ] +1 Approve the release of Apache Kvrocks(incubating) ${release_version}\n[ ] +0\n[ ] -1 Do not approve (please specify the reason)\n\nThanks\n")),(0,r.kt)("h4",{id:"vote-result-template-1"},"Vote Result template"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"Title\uff1a[RESULT][VOTE] Release Apache Kvrocks(incubating) ${release_version}\n\nContent\uff1a\n\nHi Incubator Community,\n\nThe vote to release Apache Kvrocks(incubating) 2.1.0 has passed with\n4 +1 binding and 3 +1 non-binding votes, no +0 or -1 votes.\n\nBinding votes\uff1a\n\n- xxx\n- yyy\n- zzz\n\nNon-Binding votes:\n\n- xxx\n- yyy\n- zzz\n\nVote thread: ${incubator_vote_thread_url}\n\nThanks for reviewing and voting for our release candidate.\n\nWe will proceed with publishing the approved artifacts and sending out the announcement soon.\n")),(0,r.kt)("h2",{id:"officially-released"},"Officially released"),(0,r.kt)("h3",{id:"move-source-code-and-binary-package-from-dev-to-release-repository-on-svn"},"Move source code and binary package from DEV to release repository on SVN."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'svn mv https://dist.apache.org/repos/dist/dev/incubator/kvrocks/${release_version} https://dist.apache.org/repos/dist/release/incubator/kvrocks/${release_version} -m "Release ${release_version}"\n')),(0,r.kt)("h3",{id:"check-whether-the-dev-and-release-is-correct"},"Check whether the dev and release is correct"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Make sure ",(0,r.kt)("inlineCode",{parentName:"li"},"${release_version}")," is deleted in ",(0,r.kt)("a",{parentName:"li",href:"https://dist.apache.org/repos/dist/dev/incubator/kvrocks/"},"dev"),".")),(0,r.kt)("h3",{id:"update-links-on-official-website"},"Update links on official website"),(0,r.kt)("h3",{id:"send-email-to-devkvrocksapacheorg-and-cc-announceapacheorg"},"Send email to ",(0,r.kt)("inlineCode",{parentName:"h3"},"dev@kvrocks.apache.org")," and CC ",(0,r.kt)("inlineCode",{parentName:"h3"},"announce@apache.org")),(0,r.kt)("p",null,"Release announce email template\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"Title\uff1a [ANNOUNCE] Release Apache Kvrocks(incubating) ${release_version}\nContent\uff1a\nHi all,\n\nThe Apache Kvrocks(incubating) community is pleased to announce \nthat Apache Kvrocks(incubating) ${release_version} has been released!\n\nKvrocks is a distributed key value NoSQL database that uses RocksDB\nas storage engine and is compatible with Redis protocol.\n\nThis release contains a number of new features, bug fixes and\nimprovements compared to the last version released before.\nThe notable changes since ${release_version} include:\n1. xxxxx\n2. yyyyyy\n3. zzzzzz\n\nPlease refer to the change log for the complete list of changes:\nhttps://github.com/apache/incubator-kvrocks/releases/tag/v${release_version}\n\nApache Kvrocks website: https://kvrocks.apache.org/\n\nDownload Links: https://kvrocks.apache.org/download\n\nKvrocks Resources:\n- Issue: https://github.com/apache/incubator-kvrocks/issues\n- Mailing list: dev@kvrocks.apache.org\n\nThanks\nOn behalf of Apache Kvrocks community\n")))}h.isMDXComponent=!0}}]);