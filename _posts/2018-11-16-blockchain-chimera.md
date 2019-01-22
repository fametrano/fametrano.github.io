---
layout: post
comments: true
title: Bitcoin, Blockchain e la Chimera DLT
published: true
---

*Le promesse incerte della tecnologia distributed ledger per i mercati finanziari*<sup name="a1">[*](#f1)</sup>

La _distributed ledger technology_ (DLT), basata su un registro contabile condiviso e distribuito, è in una fase iniziale di sviluppo. A volte confusa con la tecnologia blockchain utilizzata da bitcoin, si suppone ne sia l'evoluzione sviluppata per evitare le scelte architetturali che rendono la blockchain inadatta per il regolamento delle operazioni finanziarie. DLT beneficia della popolarità di blockchain che, a sua volta, deriva dalla resilienza di bitcoin; in realtà mancano implementazioni DLT in ambiti di produzione e non ci sono nemmeno specifiche tecniche rigorose che la descrivano, oltre il generico concetto di libro mastro condiviso che utilizza strumenti crittografici.

_“La comprensione della tecnologia è molto in ritardo rispetto al clamore [che la accompagna; blockchain] sembra promettere importanti cambiamenti per i mercati dei capitali e altri servizi finanziari, ma pochi possono dire esattamente come o perché”_ (Mainelli, Milne). Essendo al crocevia di teoria dei giochi, crittografia, _computer networking_ e teoria monetaria, blockchain richiede infatti competenze complesse per essere correttamente compresa.

Dal punto di vista tecnico, la blockchain è una struttura sequenziale di dati: un nuovo blocco di dati può solo essere appeso in coda; per modificare un blocco dati nel mezzo della catena esistente, tutti i blocchi successivi devono essere modificati, rendendo questa operazione computazionalmente inefficiente. Una blockchain non è adatta per la manipolazione dei dati: è progettata specificamente per il compito idiosincratico dell'immutabilità.

Dal punto di vista funzionale blockchain è un libro mastro digitale, condiviso in modalità _peer-to-peer_ tra i nodi di un network. Ogni nodo ha una copia di questo registro contabile pubblico, sul quale sono annotate tutte le transazioni. Raggiungere il “consenso distribuito”, cioè la certezza che tutti i nodi vedano la stessa versione del registro e quindi le stesse transazioni, è un problema informatico per il quale esistono teoremi che provano l’impossibilità deterministica di una soluzione. In bitcoin la soluzione è raggiunta probabilisticamente tramite uno stratagemma di teoria dei giochi, fornendo cioè incentivi economici affinché i nodi siano onesti. L’esistenza di una valuta virtuale associata alla blockchain, cioè di una risorsa digitale intrinseca alla blockchain medesima, è per questo fondamentale: consente di avere quei proventi di signoraggio utilizzabili per fornire l'incentivo economico necessario al raggiungimento del consenso distribuito della rete. Nel caso di bitcoin, il consenso distribuito riguarda la cronologia delle transazioni ed è ottenuto da volontari, indipendenti ed anonimi (i cosiddetti minatori), che competono tra loro per ottenere bitcoin nuovi di zecca, la ricompensa economica associata alla validazione onesta delle transazioni.

Ha senso considerare una blockchain senza bitcoin, senza cioè un asset digitale nativo intrinseco alla blockchain medesima? Non avere bitcoin implica non avere risorse disponibili per premiare il lavoro volontario dei validatori, che devono quindi essere centralmente reclutati per la convalida delle transazioni. Se i funzionari sono nominati da qualche organizzazione centrale, perché dovrebbero scegliere di usare una blockchain, cioè una struttura dati subottimale, invece di un efficiente database condiviso? Dal momento che l'interesse per le valute virtuali all'interno dei mercati finanziari è rimasto finora marginale, la maggior parte dell'interesse per DLT sembra in realtà ridursi a generici miglioramenti crittografici ottenuti accoppiando messaggistica sicura e database condivisi. È un grande bluff parlare di “registro condiviso” senza spiegare come si possa raggiungere il consenso sullo stesso. Inoltre, molti dei millantati vantaggi della DLT o non sono davvero auspicabili o non sono realmente esclusivi di questa tecnologia.

Il clearing e il regolamento istantaneo delle transazioni sono probabilmente la promessa più interessante della DLT: tuttavia, in un mondo di transazioni finanziarie che avvengono in nanosecondi, tale risultato non è realmente impedito da limiti tecnologici. Nell'attuale struttura dei nostri mercati finanziari, _clearing_ e regolamento istantanei sono difficili principalmente a causa di quello che potremmo chiamare “consenso da riconciliazione”: un processo di controlli e saldi, basato sulla riconciliazione di molteplici indipendenti registri contabili, che consente l’implementazione delle prescrizioni normative e la possibilità di correzioni e restrizioni operative. Al fine di ridurre il lasso di tempo di questi processi, è possibile migliorare l’attuale tecnologia dei database e le pratiche di automazione attraverso l’utilizzo di strumenti crittografici, ma è difficile immaginare di superare normativamente ed operativamente il “consenso da riconciliazione”. Anzi, l'unica alternativa incoraggiata e condivisa per ottenere efficienza ed affidabilità è il “consenso centralizzato” tipico delle clearing house. È, infatti, opinione diffusa e fondata che qualsiasi forma di consenso nei mercati finanziari debba fornire meccanismi di regolazione e ricorso basati su norme soggette alla revisione periodica, alla gestione e all'approvazione di autorità regolamentari: impossibile conciliare davvero questa intrinseca centralizzazione con forme di consenso decentralizzato.

Inoltre, per il _clearing_ e il regolamento istantaneo delle transazioni su DLT è fondamentale l'esistenza di una qualche forma di moneta blockchain utilizzabile per i pagamenti, altrimenti diventa impossibile il paradigma _delivery-versus-payment_. Le valute virtuali non sono per ora legittimate in tale ruolo ed una moneta blockchain con corso legale non è ancora disponibile. Anzi, l’idea di fornire un accesso diretto a moneta di banca centrale su un registro distribuito è ritenuta pericolosa per il sistema bancario: come sottolineato da Mark Carney, Governatore della Bank of England, _"significherebbe che le persone avrebbero accesso diretto all'asset senza rischi per eccellenza. Nella sua forma estrema potrebbe fondamentalmente, e probabilmente in maniera brusca, rimodellare il sistema bancario. Tuttavia, se dovesse coesistere con l'attuale modello bancario, potrebbe esacerbare il rischio di liquidità abbassando le frizioni implicite nella corsa alla moneta della banca centrale"_. In altre parole, tutti preferirebbero possedere moneta di banca centrale invece di moneta di banca commerciale: un enorme rischio sistemico che distruggerebbe la stabilità dei meccanismi di raccolta dei depositi e dell’erogazione del credito.

Ancora più inconsistente è il caso della DLT nelle transazioni in derivati, in particolare quelle con lunghe scadenze. Anche immaginando di poter accantonare in moneta blockchain l'importo delle garanzie da fornire a copertura delle operazioni in derivati, queste garanzie sono correlate al rischio del portafoglio in essere tra due controparti: la misura di tale rischio dipende dai modelli di valutazione scelti ed è computazionalmente pesante. In un ambiente DLT non è chiaro quale agente effettuerebbe queste valutazioni, quali modelli dovrebbe usare e quale sarebbe il suo incentivo economico nel sobbarcarsi tale compito. Inoltre, l'automazione del pagamento dei margini di variazione dovrebbe essere attuata tramite un accesso programmatico ai fondi di garanzia, il che comporterebbe enormi rischi operativi. Da ultimo, se anche si trovasse una soluzione affidabile per i frequenti pagamenti dei margini di variazione, il default della controparte lascerebbe comunque esposti a quei rischi di mercato solitamente coperti dal margine iniziale: insomma, il margine iniziale sarebbe ancora richiesto, senza che DLT possa fornire i millantati benefici in termini di riduzione del capitale immobilizzato a garanzia. Infine, in un mondo di eccessiva automatizzazione, semplici anomalie operative o inceppamenti nei pagamenti automatizzati potrebbero addirittura innescare improprie procedure di default: un rischio operativo enorme che vanifica molti dei benefici immaginati.

In generale, il miraggio dei bassi costi operativi associati alla blockchain deriva dalla falsa impressione di transazioni gratuite: in realtà, se si prendono in considerazione le rendite da signoraggio che coprono i costi del “consenso distribuito”, ogni transazione sulla blockchain bitcoin ha un costo di circa 5-10 dollari. Non sono ancora state dimostrate forme di consenso distribuito meno costose ed in ogni caso il costo della loro integrazione nell'infrastruttura esistente non sarebbe irrilevante.

Se abbandoniamo la vacuità dell’idea generica di registro distribuito e torniamo invece all’unica tecnologia blockchain realmente funzionante, quella di bitcoin, possiamo scoprirne un'applicazione spesso trascurata, interessante anche per i mercati finanziari: i servizi di notarizzazione. La blockchain bitcoin (cioè la più sicura, dal momento che lo sforzo/costo per la sua manipolazione è proibitivo) può essere utilizzata per apporre una marcatura temporale su documenti digitali, ancorando quantità di dati arbitrariamente grandi e numerose alla sicurezza derivante dall’immutabilità blockchain. L’_hash-value_ di una base dati, cioè un identificativo equivalente ad una univoca impronta digitale, viene associato ad una transazione bitcoin, come se venisse scritto nel campo “causale” della transazione. Il sistema di sicurezza che impedisce la manipolazione della transazione bitcoin garantisce anche l’immutabilità e la datazione (marcatura temporale) non ripudiabile dell’_hash-value_. Viene quindi implicitamente certificata l’esistenza di quella base dati, consentendo a tutti di verificarne la mancanza di alterazione e la datazione. Questo processo generico è stato standardizzato per ottenere marcature temporali verificabili da terze parti: _broker_ e _dealer_ potrebbero usarlo per soddisfare le prescrizioni normative sulla conservazione dei dati a prova di manomissione.

La DLT ha generato finora aspettative non realistiche: non abbiamo ancora visto alcuna applicazione concreta della chimera nota come “blockchain senza bitcoin”. Nulla nemmeno da consorzi come R3, HyperLedger o l’Enterprise Ethereum Alliance, che hanno ottenuto investimenti per centinaia di milioni ed hanno tra i partecipanti tutte le principali istituzioni finanziarie, società tecnologiche e di consulenza. Bisogna saper distinguere tra euforiche esagerazioni e la cruda realtà; al massimo, ci si può attendere il possibile rafforzamento di processi esistenti con tecniche crittografiche rese popolari da bitcoin: database con steroidi crittografici. È un po’ come se nell’esplosione nucleare di bitcoin, il _fallout_ radioattivo sia rappresentato dalla crittografia applicata.

Piuttosto, si dovrebbe dedicare maggiore attenzione alla disponibilità, per la prima volta in assoluto in ambito digitale, di un bene scarso, trasferibile ma non duplicabile: bitcoin. Questo potrebbe rivelarsi l'equivalente digitale dell’oro, potenzialmente rilevante nella storia della civilizzazione, della moneta e della finanza tanto quanto lo è stato l'oro fisico. La moneta di Internet, lo _stack TCP/IP_ per la trasmissione del valore: una dinamica ben più interessante della chimera blockchain o DTL. C’è da sviluppare l’intero ecosistema di servizi finanziari per questo nuovo asset: ad oggi ci sono le prime borse di scambio e sono arrivati i contratti _futures_ a Chicago, ma ancora mancano opzioni e soprattutto banche depositarie. Non è utile oggi una blockchain per la finanza, piuttosto è urgente la finanza della blockchain.

<a name="f1">*</a> _Originariamente pubblicato per [Borsa Italiana](https://www.borsaitaliana.it/borsaitaliana/academy/bitcoin-blockchain-chimera-dlt.htm)_.