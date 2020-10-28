---
layout: page
title: Bitcoin and Blockchain Technology - Fall 2019
description: Bitcoin and Blockchain Technology course (fall 2019), including slides, code, videos, etc.
permalink: /bbt201910-bicocca/
---

## Bitcoin and Blockchain Technology, Fall 2019

Department of Statistics and Quantitative Methods, University of Milano-Bicocca

Course page: <elearning.unimib.it/course/info.php?id=25308>  

Please subscribe the course mailing list sending an e-mail to
[bbt2019-bicocca+subscribe@https://dgi.io](mailto:bbt2019-bicocca+subscribe@https://dgi.io);
you are also invited to join the 201910-bicocca channel in the Slack [BBT workspace](https://join.slack.com/t/bbt-training/signup).

## Learning objectives

The course is an introduction to bitcoin and the associated blockchain
technology.

Starting from a computationally focused approach to
elliptic curves over finite fields and
presenting the discrete logarithm problem as cornerstone of public-key
cryptography, bitcoin is introduced as ingenious breakthrough innovation.

Its game theory, computer science (distributed systems, distributed
consensus), and monetary theory elements are examined
in the attempt to properly convey the interdisciplinarity of the topic
and appreciate its relevance.

Technical and programming elements about digital signatures,
blockchain, Merkle tree, addresses, transactions, and timestamping
are also provided to assess features and limits of the Bitcoin protocol.

## Prerequisites

There are no strict prerequisites,
even if a computer science mindset
and some familiarity with algebra and finance
might help to appreciate the course.
While a rigorous formal approach is almost impossible
in a course touching on so many and so different knowledge areas,
intellectual curiosity is stimulated about the interplay between
maths, cryptography, economic incentives, technology,
monetary theory, and politics.

## Contents

* Hash functions, hash pointers, blockchain, Merkle tree
* Modular arithmetic and algebra of sets
* Elliptic curves over real numbers and a finite field 𝐹
* Asymmetric cryptography on elliptic curves
* Elliptic curve digital signature algorithm
* Elliptic curve Schnorr signature algorithm: Mu(lti)Sig(nature),
  threshold signature, batch verification
* Diffie-Hellman
* Pedersen commitment
* Confidential transactions
* Design of a simplified digital currency
* Distributed consensus
* Mining
* P2P network
* Protocol governance
* Addresses and WIFs
* Hierarchical deterministic wallets: BIP32, BIP43, BIP44
* Mnemonic phrase: BIP39 and Electrum
* TxIns, TxOs, UTxO, nLockTime
* Bitcoin script language
* Transactions
* Blocks
* Wallets and Bitcoin Core
* Testnet, regtest, and wallet workshop
* Money and innovation: monetary and token engineering
* Hayek money and dual asset ledger money
* Blockchain beyond bitcoin
* Finance and blockchain
* Timestamping, notarization, and anchoring
* Smart contracts
* Distributed ledger technology

## Teaching method

* Slide based lessons with associated bibliography
* Python 3 programming assignments and technology assignments
* Workshop labs on Bitcoin Core, Electrum, and OpenTimestamps

## Teaching language

Italian or English, the latter if foreign students are present.

## Lessons' calendar and material

Workshops are with [Paolo Mazzocchi](https://www.linkedin.com/in/paolo-mazzocchi-6672a591/), assistant lecturer.

01. Wednesday 2019-10-09 16:30-18:30 edificio U6 aula 33  
    _Bitcoin as Digital Gold_ (part 1)  
    [slides](https://drive.google.com/file/d/1FpudunEQrBY8WLTSLzwThOoFxMKGTCho)
01. Wednesday 2019-10-16 16:30-18:30 edificio U6 aula 33  
    _Bitcoin as Digital Gold_ (part 2)  
    [slides](https://drive.google.com/file/d/1FpudunEQrBY8WLTSLzwThOoFxMKGTCho)
01. Wednesday 2019-10-23 16:30-18:30 edificio U6 aula 33  
    _Blockchain, Mining, and Distributed Consensus_ (part 1)  
    [slides](https://drive.google.com/file/d/1_rGy7wdI8iWx6w6LG_CGCmmLnAIFhncz)
01. Wednesday 2019-10-30 16:30-18:30 edificio U6 aula 33  
    _Blockchain, Mining, and Distributed Consensus_ (part 2)  
    [slides](https://drive.google.com/file/d/1_rGy7wdI8iWx6w6LG_CGCmmLnAIFhncz)
01. Wednesday 2019-11-06 16:30-18:30 edificio U6 aula 33  
    _Elliptic Curve Digital Signature Algorithm_ (part 1)  
    [slides](https://drive.google.com/file/d/1MZu_4zbI8khdYhbGJg9SwWkNA5x-Tb_W)
01. Wednesday 2019-11-13 16:30-18:30 edificio U6 aula 33  
    _Elliptic Curve Digital Signature Algorithm_ (part 2)  
    [slides](https://drive.google.com/file/d/1MZu_4zbI8khdYhbGJg9SwWkNA5x-Tb_W)
01. Wednesday 2019-11-27 16:30-18:30 edificio U6 aula 33  
    _Wallets: Key Encodings and Deterministic Key Sequences_  
    [slides](https://drive.google.com/file/d/1bM9DBgWOxegnGE6Ls3_A2NoV7f-5pILw)
01. Wednesday 2019-12-04 16:30-18:30 edificio U6 aula 33  
    _Wallets: Key Encodings and Deterministic Key Sequences_ (Part 2)  
    [slides](https://drive.google.com/file/d/1bM9DBgWOxegnGE6Ls3_A2NoV7f-5pILw)
01. Wednesday 2019-12-11 16:30-18:30 edificio U6 aula 33  
    _Transactions and Blocks_  
    [slides](https://drive.google.com/file/d/1xEcBCyN3yLN40A3Ny8k-2PQ-xKJw1RlA)
01. Wednesday 2019-12-18 16:30-18:30 edificio U6 aula 33  
    _Beyond Bitcoin: Between Hype and Reality_  
    [slides](https://drive.google.com/file/d/12jGsSBY5sMwgRQwvjwlnG6J9xOxi0P0Z)
01. Friday 2020-12-20 12:30-14:30 edificio U6 aula 22  
    Wednesday 2020-01-15 16:30-18:30 edificio U6 aula 33  
    _The Cryptocurrency Frontier
in Monetary Engineering_  
    [slides](https://drive.google.com/file/d/1T2z4vfRvEv_wooerJI7FgD8IkxeTihlj),
    [text]( https://bit.ly/2NQg9VJ)

In the last lesson anonymous course evaluation [forms](https://docs.google.com/document/d/1AEQTb99cVhqnVu7CxgVorP5PzB7RrSHH_ZK9Qvv2u3s/edit) will be collected

## Python library

<https://github.com/dginst/btclib>

## Python scripts, Excel spreadsheets, and regtest lab material

<https://github.com/dginst/bbt>

## Introductory reading

* Ferdinando M. Ametrano,  
  _"Bitcoin: oro digitale per nuovi standard monetari"_ (2018),  
  <https://bit.ly/2NQg9VJ>

## Technology references

* Satoshi Nakamoto,  
  _"Bitcoin: A Peer-to-Peer Electronic Cash System"_ (2008),  
  <bitcoin.org/bitcoin.pdf>
* Andreas M. Antonopoulos,  
  _"Mastering Bitcoin: Programming the Open Blockchain"_ (2nd edition, 2017),  
  Oreilly & Associates Inc, 978-1491954386,  
  <https://github.com/bitcoinbook/bitcoinbook>
* Jimmy Song,  
  _"Programming Bitcoin: Learn How to Program Bitcoin from Scratch"_ (2019)  
  Oreilly & Associates Inc, 978-1492031499,  
  <https://github.com/jimmysong/programmingbitcoin>
* A. Narayanan, et al.,  
  _"Bitcoin and Cryptocurrency Technologies: A Comprehensive Introduction"_ (2016),  
  Princeton University Press, 978-0691171692,  
  <https://www.coursera.org/learn/cryptocurrency>, <bitcoinbook.cs.princeton.edu/>, <lopp.net/pdf/princeton_bitcoin_book.pdf>
* Pedro Franco,  
  _“Understanding Bitcoin: Cryptography, Engineering and Economics”_ (2014),  
  Wiley, 978-1119019169
* Ferdinando M. Ametrano,  
  _"Bitcoin, Blockchain, and Distributed Ledgers: Between Hype and Reality"_ (2017),  
  <https://ssrn.com/abstract=2832249>
* Roger Wattenhofer,  
  _“Blockchain Science: Distributed Ledger Technology”_ (3rd edition, 2019),  
   Independently published, 978-1793471734

## Cryptography references

* Christof Paar, Jan Pelzl,  
  _"Understanding Cryptography"_,  
  Springer, 978-3642041006
  <https://toc.cryptobook.us//>, <wiki.crypto.rub.de/Buch/en/slides.php>, <https://youtube.com/channel/UC1usFRN4LCMcfIV7UjHNuQg/videos>
* Dan Boneh,
  _"A Graduate Course in Applied Cryptography"_,  
  Stanford University  
  <https://www.coursera.org/learn/crypto>, <toc.cryptobook.us/>
* Lawrence C. Washington,  
  _“Elliptic Curves Number Theory And Cryptography”_ (2008),  
  Chapman and Hall, 978-1420071467
* Standards for Efficient Cryptography Group  
  SEC 1: Elliptic Curve Cryptography, March 2009. Version 2.0.  
  <https://www.secg.org/sec1-v2.pdf>
* Standards for Efficient Cryptography Group  
  SEC 2: Recommended Elliptic Curve Domain Parameters, March 2009. Version 2.0.  
  <https://www.secg.org/sec2-v2.pdf>
* Guidelines for Efficient Cryptography  
  GEC 2: Test Vectors for SEC 1, September 1999. Version 0.3.  
  <read.pudn.com/downloads168/doc/772358/TestVectorsforSEC%201-gec2.pdf>

## Monetary theory references

* Friedrich A. Hayek,  
  _"Denationalisation of Money: The Argument Refined"_,  
  <mises.org/library/denationalisation-money-argument-refined>  
* Saifedean Ammous,  
  _"The Bitcoin Standard: The Decentralized Alternative to Central Banking"_ (2018),  
  Wiley, 978-1119473862
* Ferdinando M. Ametrano,  
  _"Hayek Money: The Cryptocurrency Price Stability Solution"_ (2014),  
  <https://ssrn.com/abstract=2425270>
* Robert Sams,  
  _"A Note on Cryptocurrency Stabilisation: Seigniorage Shares"_ (2015),  
  <https://github.com/rmsams/stablecoins/blob/master/paper.pdf>

