---
layout: page
title: Bitcoin Courses
description: Bitcoin courses, including slides, code, videos, etc.
image:
    main: btclib-logo.jpg
permalink: /bbt/
---

## Bitcoin courses

* [Bitcoin & Crypto-Assets, March-April 2025]({{ site.baseurl }}/bbt202503-bicocca/)  
  _Department of Statistics and Quantitative Methods, University of Milano-Bicocca_
* [Bitcoin & Crypto-Assets, April-June 2025]({{ site.baseurl }}/bbt202504-math/)  
  _Department of Mathematics, University of Milan (La Statale)_
* [Bitcoin & Crypto-Assets, October-December 2025]({{ site.baseurl }}/bbt202510-essec/)  
  _Department of Finance, ESSEC Business School_

Please refer to the page dedicated to your university, if available above.
For previous editions, see the [courses page]({{ site.baseurl }}/courses).

These courses are for the students of those universities;
anyone else, please consider <https://dgi.io/workshop>.

## Learning objectives

The course is about bitcoin and the associated blockchain
technology.

Starting from a computationally focused approach to
elliptic curves over finite fields and
presenting the discrete logarithm problem as the cornerstone of public-key
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

* Cash, Electronic Money, Central Bank Money, eCash
* Internet Money
* Bitcoin Transactions
* About Money
* Private Money and the Centralization Dilemma
* The Double Spending Problem
* Bitcoin as Digital Gold
* Bitcoin as Investment Asset
* Bitcoin Financial Services
* Discrete Logarithm Problem on Finite Cyclic Groups
* Modular Arithmetic
* Finite Fields
* Elliptic Curves Over Real Numbers
* DLP on Elliptic Curves Over Finite Fields
* Hash Functions
* Partial Hash Inversion
* Hash Pointer Data Structures: Blockchain and Merkle Tree
* Design of A Simplified Digital Currency
* Distributed Consensus
* Mining
* P2P Network
* Protocol Governance
* Elliptic curve digital signature algorithm
* Elliptic curve Schnorr signature algorithm: Mu(lti)Sig(nature),
  threshold signature, batch verification
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

## Lessons

Assistant lecturer: [Paolo Mazzocchi](https://www.linkedin.com/in/paolo-mazzocchi-6672a591/).

01. [_Bitcoin as Digital Gold_](https://drive.google.com/file/d/1FpudunEQrBY8WLTSLzwThOoFxMKGTCho)  
    * Internet Money  
    * Bitcoin Transactions  
    * About Money  
    * Private Money and the Centralization Dilemma  
    * The Double Spending Problem  
    * Bitcoin as Digital Gold
    * Bitcoin as Investment Asset  
    * Assignment: [Testnet transaction](https://drive.google.com/file/d/1DjFl4xickJZLfkIDkSBr-N89rabMh4L-)  
01. [_Hash Functions_](https://drive.google.com/file/d/1LzaOx1rrFzswkKBrmZjIbMYkxWYpn-m1)  
    * Hash Functions and Their Properties  
    * Puzzle Friendliness and Partial Hash Inversion  
    * Hash–based Data Structures  
    * Assignment: [Partial Hash Inversion](https://drive.google.com/file/d/1nAcw9UjcI3qbUvhYjFiUtKUJpJ1R7S9p)  
01. [_Blockchain, Mining, and Distributed Consensus_](https://drive.google.com/file/d/1_rGy7wdI8iWx6w6LG_CGCmmLnAIFhncz)  
    * Simplified Digital Coin
    * Distributed Consensus
    * Proof-of-Work (PoW)
    * Mining
    * P2P Network
    * Protocol Governance  
01. [_Discrete Logarithm Problem on Finite Fields and Elliptic Curves_](https://drive.google.com/file/d/1FgQaVBv__y7x07cRCMaCXM9xTJMW9lgS)  
    * Elliptic Curves and The Discrete Logarithm Problem
    * Discrete Logarithm Problem on Finite Cyclic Groups
    * Modular Arithmetic
    * Finite Fields
    * Discrete Logarithm Problem on Elliptic Curves Over Finite Fields  
    * Assignment: [Finite Fields and Elliptic Curves](https://drive.google.com/file/d/1UejN7o9uW6iRgWd5ea5YE4-6oiS5ijpR)  
01. [_Elliptic Curve Digital Signature Algorithm (ECDSA)_](https://drive.google.com/file/d/1MZu_4zbI8khdYhbGJg9SwWkNA5x-Tb_W)
    * Asymmetric Cryptography on Elliptic Curves
    * Digital Signature Protocol
    * Elliptic Curve Digital Signature Algorithm
01. [_ECDSA and Beyond_](https://drive.google.com/file/d/1MZu_4zbI8khdYhbGJg9SwWkNA5x-Tb_W)
    * Elliptic Curve Efficient Computations
    * Schnorr Signature Algorithm (BIP340)
    * Diffie-Hellman
    * Symmetric Cryptography
    * Encryption Using AES  
01. [_Addresses, WIFs, and Bitcoin Message Signing_](https://drive.google.com/file/d/1xEcBCyN3yLN40A3Ny8k-2PQ-xKJw1RlA)  
    * Base58 Encoding
    * P2PKH Addresses and Wallet Import Formats
    * Bitcoin Message Signing  
    * Assignment: [Bitcoin Message Signature](https://drive.google.com/file/d/1tlFoVT_k_H4Y9TJfU9OBGHmhy6BY8QL3/)  
01. [_Transactions and Scripts_](https://drive.google.com/file/d/1S-1ltRVYPo6N33nXNWWBmopEg6jYfntY)  
    * TxIns, TxOs, and UTxOs
    * Bitcoin Script Language
    * Standard Transaction Scripts
    * Signatures Types and Smart Contracts
    * Blocks
    * Assignment: [Halving Blocks](https://drive.google.com/file/d/1AvICvFSJexzWiXcvYPO0UD6e8Es51BeP/)  
01. [_Transactions and Blocks_](https://drive.google.com/file/d/1S-1ltRVYPo6N33nXNWWBmopEg6jYfntY)  
    * Transaction Serializazion
    * Blocks
    * Block Header  
01. [_Timestamping and the OpenTimestamps Protocol_](https://drive.google.com/file/d/1GksUgO54g1z7P4HUVmxXufmuM9y3EZ1b)  
    * Blockchain Immutability
    * Timestamping
    * The OpenTimestamps standard
    * Use Cases
    * Assignment: [Timestamped document](https://drive.google.com/file/d/1qTscc6dS-zzEDoSASORQpmYQqtmM_1g/)  
01. [_Wallets and Custody_](https://drive.google.com/file/d/10p-oWviNRLBv5hQUJa3KPxMQLl1a3nXF)  
    * Key Management and UTxO Database Access
    * Wallets as Collection of Keys
    * Custody  
01. [_Deterministic Key Chains_](https://drive.google.com/file/d/1bM9DBgWOxegnGE6Ls3_A2NoV7f-5pILw)  
    * Deterministic Key-pair Hash-chains
    * Hierarchical Deterministic Key-pair Hash-chains: BIP32
    * Extending BIP32: BIP43, BIP44, and SLIP32
    * Mnemonic Phrases: BIP39 and Electrum
01. [_Beyond Bitcoin: Between Hype and Reality_](https://drive.google.com/file/d/12jGsSBY5sMwgRQwvjwlnG6J9xOxi0P0Z)  
    * Other Cryptocurrencies
    * Smart Contracts
    * Initial Coin Offering
    * Non-Fungible Tokens (NFT)
    * Decentralized Finance (DeFi)
    * Traditional Finance for Crypto Assets
    * Blockchain Without Bitcoin
    * Distributed Ledger Technology
01. [_Financial Products and Services for the Blockchain Economy_](https://drive.google.com/file/d/1KnZL6dXQTJRbCKtCRfBvVO9xrRnHJTgb)  
    * Bitcoin as Investment Asset
    * Crypto as Investment Asset
    * Regulation
    * Payment Processors
    * Exchanges
    * Custodians
    * Financial Products
01. [_The Cryptocurrency Frontier in Monetary Engineering_](https://drive.google.com/file/d/1T2z4vfRvEv_wooerJI7FgD8IkxeTihlj)
    ([video](https://www.youtube.com/watch?v=dvgb2YOm1y4&t=2922s))  
    * Cash, eMoney, Central Bank Money, and eCash
    * Stable Coins
    * Hayek Money: Elastic Non-discretionary Policy
    * Hayek Money: Dual Asset Ledger and Proof-of-Payment

    _[Bitcoin: oro digitale per nuovi standard monetari](https://www.amazon.it/Dal-sesterzio-bitcoin-Angelo-Miglietta/dp/8849856806)_  
    _[Hayek Money: The Cryptocurrency Price Stability Solution](https://ssrn.com/abstract=2425270)_  

### Guest Speakers

* [_Digital Signature and Digital Identity: From RSA to eIDAS_](https://drive.google.com/file/d/1Ym9K-gHx8H2jMBND0tdjXhvpVCNZa8FB)
  with [Emanuele Cisbani](https://www.linkedin.com/in/emanuelecisbani/)  
* [_New trends in FinTech: Blockchain and AI_](https://drive.google.com/file/d/1SRx8YNC3VE54R2Xd9WpKXuF2WA4JFN2x)
  with [Filippo Annunziata](https://www.linkedin.com/in/filippo-annunziata-b0394767/)  
* [_Regulation on Markets in Crypto-assets (MiCA)_](https://drive.google.com/file/d/1sl-mVjX6uqMuJRzWU8FesWCCFa39c4rH)
  with [Andrea Conso](https://www.linkedin.com/in/andrea-conso/)  
* [_The Tax Aspects of Crypto-Assets_](https://drive.google.com/file/d/1UeBZ9J6llc0TqjW5QSE77HqKZHdOosM_)
  with [Francesco Avella](https://www.linkedin.com/in/francesco-avella-84b1a111/)  
* [_Le misure di prevenzione dei reati finanziari in ambito crypto-asset_](https://drive.google.com/file/d/14PEtSO9i_QA65lKU4s7T7-rDtyGZhpAq)
  with [Vito Barbera](https://www.linkedin.com/in/vito-barbera-44883a89/)  
* [_CBDC e Euro digitale_](https://drive.google.com/file/d/1czk87aaIvN_Bm8V-N51-0CojMIshy9PW)
  with [Francesca Mattassoglio](https://www.linkedin.com/in/francesca-mattassoglio-93042697/)  

## Python library

[btclib.org](https://btclib.org)
[github.com/btclib-org/btclib](https://github.com/btclib-org/btclib)

## Python scripts, Excel spreadsheets, and regtest lab material

[github.com/btclib-org/bbt](https://github.com/btclib-org/bbt)

## Introductory reading

* Ferdinando Ametrano,  
  _"Bitcoin: oro digitale, finanza e tulipani"_,  
  <https://docs.google.com/document/d/1gecm0uT43tl8d4WFYNs9H_v3p70PPfPmQITR4GxSWkE>

## Technology references

* Satoshi Nakamoto,  
  _"Bitcoin: A Peer-to-Peer Electronic Cash System"_ (2008),  
  <https://bitcoin.org/bitcoin.pdf>
* Andreas M. Antonopoulos,  
  _"Mastering Bitcoin: Programming the Open Blockchain"_ (2nd edition, 2017),  
  Oreilly & Associates Inc, 978-1491954386,  
  <https://github.com/bitcoinbook/bitcoinbook>
* Jimmy Song,  
  _"Programming Bitcoin: Learn How to Program Bitcoin from Scratch"_ (2020)  
  Oreilly & Associates Inc, 978-1492031499,  
  <https://github.com/jimmysong/programmingbitcoin>
* A. Narayanan, et al.,  
  _"Bitcoin and Cryptocurrency Technologies: A Comprehensive Introduction"_ (2016),  
  Princeton University Press, 978-0691171692,  
  <https://www.coursera.org/learn/cryptocurrency>, <https://bitcoinbook.cs.princeton.edu>, <https://bitcoinbook.cs.princeton.edu>, <https://www.lopp.net/pdf/princeton_bitcoin_book.pdf>
* Pedro Franco,  
  _“Understanding Bitcoin: Cryptography, Engineering and Economics”_ (2014),  
  Wiley, 978-1119019169
* Ferdinando Ametrano,  
  _"Bitcoin, Blockchain, and Distributed Ledgers: Between Hype and Reality"_ (2017),  
  <https://ssrn.com/abstract=2832249>
* Roger Wattenhofer,  
  _“Blockchain Science: Distributed Ledger Technology”_ (3rd edition, 2020),  
   Independently published, 978-1793471734

## Cryptography references

* Christof Paar, Jan Pelzl,  
  _"Understanding Cryptography"_,  
  Springer, 978-3642041006  
  <https://wiki.crypto.rub.de/Buch/en/slides.php>, <https://youtube.com/channel/UC1usFRN4LCMcfIV7UjHNuQg/videos>
* Dan Boneh,
  _"A Graduate Course in Applied Cryptography"_,  
  Stanford University  
  <https://www.coursera.org/learn/crypto>, <https://toc.cryptobook.us/>
* Lawrence C. Washington,  
  _“Elliptic Curves: Number Theory And Cryptography”_ (2008),  
  Chapman and Hall, 978-1420071467
* Standards for Efficient Cryptography Group  
  SEC 1: Elliptic Curve Cryptography, March 2009. Version 2.0.  
  <https://www.secg.org/sec1-v2.pdf>
* Standards for Efficient Cryptography Group  
  SEC 2: Recommended Elliptic Curve Domain Parameters, March 2009. Version 2.0.  
  <https://www.secg.org/sec2-v2.pdf>
* Guidelines for Efficient Cryptography  
  GEC 2: Test Vectors for SEC 1, September 1999. Version 0.3.  
  <http://read.pudn.com/downloads168/doc/772358/TestVectorsforSEC%201-gec2.pdf>

## Monetary theory references

* Friedrich A. Hayek,  
  _"Denationalisation of Money: The Argument Refined"_,  
  <https://mises.org/library/denationalisation-money-argument-refined>  
* Saifedean Ammous,  
  _"The Bitcoin Standard: The Decentralized Alternative to Central Banking"_ (2018),  
  Wiley, 978-1119473862
* Ferdinando Ametrano,  
  _"Hayek Money: The Cryptocurrency Price Stability Solution"_ (2014),  
  <https://ssrn.com/abstract=2425270>
* Robert Sams,  
  _"A Note on Cryptocurrency Stabilisation: Seigniorage Shares"_ (2015),  
  <https://github.com/rmsams/stablecoins/blob/master/paper.pdf>
* Ferdinando Ametrano,  
  _"Bitcoin: oro digitale per nuovi standard monetari"_ (2020),  
  published in "Dal sesterzio al bitcoin", Rubettino Editore (edited by Angelo Miglietta, and Alberto Mingardi)  
  <https://drive.google.com/file/d/1-1k3wlL6ElZzJMjSakTjTNetJI5ws6wL>
