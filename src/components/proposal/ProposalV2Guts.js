import React from 'react';

import ValueDisplay from '../shared/ValueDisplay';
import ProposalKickedMember from './ProposalKickedMember';
import config from '../../config';
import { DataP, LabelH5, DataH2 } from '../../App.styles';
import AddressProfileDisplay from '../shared/AddressProfileDisplay';

const ProposalGutsV2 = ({ proposal, daoData }) => {
  return (
    <div className="ProposalGuts">
      {proposal.cancelled && <p style={{ color: 'red' }}>Proposal Cancelled</p>}

      {proposal.sponsored ? (
        <>
          <LabelH5>Sponsored By</LabelH5>
          <AddressProfileDisplay address={proposal.sponsor} />
        </>
      ) : null}

      {proposal.newMember || proposal.proposalType === 'Funding Proposal' ? (
        <>
          {proposal.newMember || +proposal.tributeOffered > 0 ? (
            <div className="Tribute">
              <LabelH5>Tribute</LabelH5>
              <DataH2>
                <ValueDisplay
                  value={
                    proposal.tributeOffered /
                    10 ** proposal.tributeTokenDecimals
                  }
                  symbolOverride={proposal.tributeTokenSymbol}
                />
              </DataH2>
            </div>
          ) : null}

          <div className="Offer">
            <div className="Shares">
              <LabelH5>Shares</LabelH5>
              <DataH2>{proposal.sharesRequested}</DataH2>
            </div>
            <div className="Shares">
              <LabelH5>Loot</LabelH5>
              <DataH2>{proposal.lootRequested}</DataH2>
            </div>
            <div className="Shares">
              <LabelH5>Requesting</LabelH5>
              <DataH2>
                <ValueDisplay
                  value={
                    proposal.paymentRequested /
                    10 ** proposal.paymentTokenDecimals
                  }
                  symbolOverride={proposal.paymentTokenSymbol}
                />
              </DataH2>
            </div>
          </div>

          {proposal.proposalType === 'Funding Proposal' ? (
            <>
              <LabelH5>Proposed by</LabelH5>
              <AddressProfileDisplay address={proposal.proposer} />

              <LabelH5>Funding for</LabelH5>
              <AddressProfileDisplay address={proposal.applicant} />
            </>
          ) : (
            <>
              <LabelH5>Applicant</LabelH5>
              <AddressProfileDisplay address={proposal.applicant} />
            </>
          )}
        </>
      ) : null}

      {proposal.whitelist ? (
        <>
          <LabelH5>Proposed by</LabelH5>
          <AddressProfileDisplay address={proposal.proposer} />
          <LabelH5>Token Symbol</LabelH5>
          <DataP>{proposal.tributeTokenSymbol}</DataP>
          <LabelH5>Token Contract</LabelH5>
          <DataP>{proposal.tributeToken}</DataP>

          <DataP>
            <a
              href={
                config.SDK_ENV === 'Kovan'
                  ? 'https://kovan.etherscan.io/address/' +
                    proposal.tributeToken
                  : 'https://etherscan.io/address/' + proposal.tributeToken
              }
              target="_blank"
              rel="noreferrer noopener"
            >
              View Token on Etherscan
            </a>
          </DataP>
        </>
      ) : null}

      {proposal.guildkick ? (
        <>
          <LabelH5>Member to kick</LabelH5>
          <AddressProfileDisplay address={proposal.applicant} />

          <LabelH5>Proposed by</LabelH5>
          <AddressProfileDisplay address={proposal.proposer} />
          <ProposalKickedMember proposal={proposal} />
        </>
      ) : null}

      {proposal.trade ? (
        <>
          <LabelH5>Applicant</LabelH5>
          <AddressProfileDisplay address={proposal.applicant} />

          <LabelH5>Proposed by</LabelH5>
          <AddressProfileDisplay address={proposal.proposer} />

          <div className="Offer">
            <div className="Shares">
              <LabelH5>Giving</LabelH5>
              <DataH2>
                <ValueDisplay
                  value={
                    proposal.tributeOffered /
                    10 ** (proposal.tributeTokenDecimals || 18)
                  }
                  symbolOverride={proposal.tributeTokenSymbol}
                />
              </DataH2>
            </div>
          </div>

          <div className="Offer">
            <div className="Shares">
              <LabelH5>Requesting</LabelH5>
              <DataH2>
                <ValueDisplay
                  value={
                    proposal.paymentRequested /
                    10 ** (proposal.paymentTokenDecimals || 18)
                  }
                  symbolOverride={proposal.paymentTokenSymbol}
                />
              </DataH2>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default ProposalGutsV2;
