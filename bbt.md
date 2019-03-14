---
layout: page
title: Bitcoin and Blockchain Technology Course
permalink: /bbt/
---

# Bitcoin and Blockchain Technology, Spring 2019

Department of Statistics and Quantitative Methods, Università Milano-Bicocca

Course page: <https://elearning.unimib.it/course/view.php?id=17369>  

Please subscribe the course mailing list sending an e-email to
[2019bbt-bicocca+subscribe@ametrano.net](mailto:2019bbt-bicocca+subscribe@ametrano.net)

## Learning objectives

The course is an introduction to bitcoin and the associated blockchain
technology.

Starting from a computationally focused approach to elliptic curves and
presenting the discrete logarithm problem as cornerstone of public-key
cryptography, bitcoin is introduced as an interesting
application of number theory and the algebraic structure of elliptic
curves over finite fields.

The game theory, computer science (distributed systems, distributed
consensus), and monetary theory elements of bitcoin are then examined
in the attempt to properly convey the interdisciplinarity of the topic.

## Prerequisites

There are no strict prerequisites, even if a computer science mindset and previous familiarity with number theory, algebra, and finance
might help to appreciate the course.
Curiosity towards the cultural relevance of the interplay between
theory, practice, economic incentives, technology, monetary theory,
and politics might result more relevant than a rigorous formal approach
on so many and so different knowledge areas.

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

At the end of the course students are invited to compile the _course evaluation form_: <https://docs.google.com/document/d/1AEQTb99cVhqnVu7CxgVorP5PzB7RrSHH_ZK9Qvv2u3s/edit>

## Teaching language

Italian or English, the latter if foreign students are present.

## Lessons

1. Friday 2019-02-22 09:30-11:30 Edificio U6 aula 21  
   _Introduction_  
   slides (ENG): <https://drive.google.com/open?id=1FpudunEQrBY8WLTSLzwThOoFxMKGTCho>  
   video (2017 ITA): <https://www.youtube.com/watch?v=Ef3d1N4Ogxw&list=PLrVvuryXHYTdzvtpzrj4wvYEhCwF6G82b&index=1>
2. Friday 2019-03-01 09:30-11:30 Edificio U6 aula 20  
   _Blockchain, Mining, and Distributed Consensus_  
   slides (ENG): <https://drive.google.com/open?id=1_rGy7wdI8iWx6w6LG_CGCmmLnAIFhncz>
3. Friday 2019-03-08 09:30-11:30  
   and also  
   Tuesday 2019-03-12 11:30-13:30 Edificio U6 aula 20  
   _Elliptic Curve Digital Signature Algorithm_  
   slides (ENG): <https://drive.google.com/open?id=1MZu_4zbI8khdYhbGJg9SwWkNA5x-Tb_W>
4. Friday 2019-03-15 09:30-11:30 Edificio U6 aula 20  
   _Wallets: Key Encodings and Deterministic Sequences_  
   slides (ENG): <https://drive.google.com/open?id=19UoXwZYOw5xBQF91k5sn2dZd1RrruzA3>
5. Friday 2019-03-22 09:30-11:30 Edificio U6 aula 20  
   _Transactions and Blocks_  
   slides (ENG): <https://drive.google.com/open?id=1xEcBCyN3yLN40A3Ny8k-2PQ-xKJw1RlA>
6. Friday 2019-03-29 09:30-11:30 Edificio U6 aula 20  
   _Beyond Bitcoin: Timestamping and DLT_  
   slides (ENG): <https://drive.google.com/open?id=12jGsSBY5sMwgRQwvjwlnG6J9xOxi0P0Z>  
   video (2017 ITA): <https://www.youtube.com/watch?v=ByzoYHx7eTc&list=PLrVvuryXHYTdzvtpzrj4wvYEhCwF6G82b&index=3>
7. Friday 2019-04-05 09:30-11:30 Edificio U6 aula 20  
   _Monetary (and Token) Engineering_  
   slides (ENG): <https://drive.google.com/open?id=1T2z4vfRvEv_wooerJI7FgD8IkxeTihlj>  
   video (2017 ITA): <https://www.youtube.com/watch?v=Wu_7RVwoV84&list=PLrVvuryXHYTdzvtpzrj4wvYEhCwF6G82b&index=2>

## Python library

<http://github.com/dginst/btclib>

## Python scripts, Excel spreadsheets, and regtest lab material

<https://github.com/fametrano/bbt>

## Papers

* Satoshi Nakamoto,  
  _"Bitcoin: A Peer-to-Peer Electronic Cash System"_ (2008),  
  <https://bitcoin.org/bitcoin.pdf>
* Ferdinando M. Ametrano,  
  _"Hayek Money: The Cryptocurrency Price Stability Solution"_ (2014),  
  <https://ssrn.com/abstract=2425270>
* Robert Sams,  
  _"A Note on Cryptocurrency Stabilisation: Seigniorage Shares"_ (2015),  
  <https://github.com/rmsams/stablecoins/blob/master/paper.pdf>
* Ferdinando M. Ametrano,  
  _"Bitcoin, Blockchain, and Distributed Ledgers: Between Hype and Reality"_ (2017),  
  <https://ssrn.com/abstract=2832249>
* Ferdinando M. Ametrano,  
  _"Bitcoin: oro digitale per nuovi standard monetari"_ (2018),  
  <http://bit.ly/2NQg9VJ>

## Technical books

* Andreas M. Antonopoulos, _"Mastering Bitcoin"_ (2nd edition, 2017),  
  <https://github.com/bitcoinbook/bitcoinbook>
* A. Narayanan, et al., _"Bitcoin and Cryptocurrency Technologies"_,  
  <https://www.coursera.org/learn/cryptocurrency>,  
  <http://bitcoinbook.cs.princeton.edu/>,  
  <https://lopp.net/pdf/princeton_bitcoin_book.pdf>
* Pedro Franco, “Understanding Bitcoin”, Wiley

## Cryptography

* Christof Paar, Jan Pelzl, _"Understanding Cryptography"_,  
  <http://www.crypto-textbook.com/>,  
  <http://wiki.crypto.rub.de/Buch/en/slides.php>,  
  <https://www.youtube.com/channel/UC1usFRN4LCMcfIV7UjHNuQg/videos>
* Dan Boneh,
  _"A Graduate Course in Applied Cryptography"_,  
  Stanford University  
  <https://www.coursera.org/learn/crypto>,  
  <https://toc.cryptobook.us/>
* Standards for Efficient Cryptography Group  
  SEC 1: Elliptic Curve Cryptography, March 2009. Version 2.0.  
  <http://www.secg.org/sec1-v2.pdf>
* Standards for Efficient Cryptography Group  
  SEC 2: Recommended Elliptic Curve Domain Parameters, March 2009. Version 2.0.  
  <http://www.secg.org/sec2-v2.pdf>
* Guidelines for Efficient Cryptography  
  GEC 2: Test Vectors for SEC 1, September 1999. Version 0.3.  
  <http://read.pudn.com/downloads168/doc/772358/TestVectorsforSEC%201-gec2.pdf>

## Monetary books

* Saifedean Ammous, _"The Bitcoin Standard: The Decentralized Alternative to Central Banking"_,
  Wiley
* Friedrich A. Hayek, _"Denationalisation of Money: The Argument Refined"_,  
  <https://mises.org/library/denationalisation-money-argument-refined>

---

Bitcoin donation address [1FEz167JCVgBvhJBahpzmrsTNewhiwgWVG](bitcoin:1FEz167JCVgBvhJBahpzmrsTNewhiwgWVG)
