import * as React from 'react'

const faq = {
  title: 'Frequently asked questions',
  // description: '',
  items: [
    {
      q: 'Why Are Smart Contract Audits Critical for Web3 Security?',
      a: (
        <>
          Smart contract audits are essential for identifying vulnerabilities
          before blockchain deployment. The $19.3 million UwU Lend exploit
          demonstrates the catastrophic risks of unverified code. While initial
          audits are crucial, continuous monitoring and adaptive security
          strategies are equally important to protect against evolving threats
          in the dynamic Web3 ecosystem.
        </>
      ),
    },
    {
      q: 'How Does DevSecOps Transform Blockchain Development Security?',
      a: 'DevSecOps integrates security throughout the development lifecycle, enabling early vulnerability detection and faster secure application delivery. By embedding security checks directly into the development pipeline, we transform security from a final checkpoint to a continuous, collaborative process that minimizes risks and accelerates innovation.',
    },
    {
      q: 'What Strategies Protect Web3 Projects from Sophisticated Phishing Attacks?',
      a: 'Our approach combats phishing through comprehensive, scenario-based training that addresses the $500 million in losses from 150 incidents in 2024. We develop customized programs that simulate real-world social engineering tactics, building team resilience and creating a proactive security mindset unique to the Web3 environment.',
    },
    {
      q: 'How Do We Ensure Continuous Security Monitoring for Blockchain Applications?',
      a: 'Advanced automated scanners provide real-time monitoring, detecting vulnerabilities and unusual patterns in blockchain applications. With over $824 million lost to exploits in Q1 2024, our continuous monitoring leverages machine learning to identify and mitigate potential threats before they can cause significant damage.',
    },
  ],
}

export default faq
