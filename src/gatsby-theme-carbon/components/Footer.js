import React from "react";
import {
  footerContent,
  footerContentDefault,
  footerRow,
  footerLinkCol,
  footerButtonCol,
  footerLastRow,
  footerDiectoryRow,
  footerFollowSection,
} from "./Footer.module.scss";
import { Button } from "carbon-components-react";
import { Row, Column } from "gatsby-theme-carbon";
import cx from 'classnames';

const CustomFooter = ({homepage}) => (
  <div className={cx(footerContent, { [footerContentDefault]: !homepage })}>
    <Row className={footerRow}>
      <Column colMd={3} colLg={3} colXl={3} className={footerLinkCol}>
        <h1>Freight Trust & Clearing</h1>
      </Column>
      <Column colMd={7} colLg={7} colXl={8}>
        <div className={footerLinkCol}>
          <div>
            <h5>Product</h5>
            <a href="/freight">X12/EDIFACT</a>
            <a href="/freight">AS2/AS4</a>
            <a href="/freight">MFT/MFD</a>
            <a href="/freight">EDICOM</a>
            <a href="/freight">OFTP2</a>
            <a href="/freight">PEPPOL</a>
          </div>
          <div>
            <h5>Corporate</h5>
            <a href="/freight">About Us</a>
            <a href="/freight">Press</a>
            <a href="/freight">Customers</a>
            <a href="/freight">Careers</a>
            <a href="/freight">Blog</a>
            <a href="/freight">System Status</a>
            <a href="/freight">Security & Compliance</a>
          </div>
          <div>
            <h5>Solutions</h5>
            <a href="/freight">Trucking</a>
            <a href="/freight">Maritime</a>
            <a href="/freight">Intermodal</a>
            <a href="/freight">Freight Forwarders</a>
            <a href="/freight">Brokers & 3PLs</a>
            <a href="/freight">Rail & Air</a>
          </div>
          <div>
            <h5>Resources</h5>
            <a href="/freight">Documentation</a>
            <a href="/freight">Open Source</a>
            <a href="/freight">Developer Relations</a>
            <a href="/freight">Engineering</a>
            <a href="/freight">Security</a>
            <a href="/freight">Customer Success</a>
          </div>
        </div>
      </Column>
      <Column
        colSm={12}
        colMd={2}
        colLg={2}
        colXl={1}
        className={footerButtonCol}
      >
        <div>
          <Button>Register</Button>
        </div>
        <div>
          <Button kind="tertiary">Log In</Button>
        </div>
      </Column>
    </Row>

    <Row className={footerDiectoryRow}>
      <Column colMd={6} colLg={6}>
        <p>1424 4TH ST Santa Monica, CA</p>
        <p></p>
        <p>LEI: 254900C9UJMDGJ0ILK56</p>
        <p>support@freight.zendesk.com</p>
        <p></p>
      </Column>
      <Column colMd={2} colLg={2}></Column>
      <Column colMd={2} colLg={2}>
        <a href="https://twitter.com/freighttrustnet">Investors</a>
        <a href="#top">Partnerships</a>
        <a href="https://medium.com/freighttrust">Compliance</a>
        <a href="https://t.me/freighttrust">Exchange</a>
      </Column>
      <Column colMd={2} colLg={2}>
        <a href="https://github.com/freight-chain">GitHub Community</a>
        <a href="https://gitlab.com/fr8">GitLab Devops</a>
        <a href="https://hub.docker.com/r/freightcorp">Docker Hub</a>
      </Column>
    </Row>

    <Row className={footerLastRow}>
      <Column colMd={6} colLg={6}>
        <div className={footerFollowSection}>
          <span>Terms of Service</span>
          <span>Privacy Policy</span>
          <span>Security</span>
        </div>
      </Column>
      <Column colMd={6} colLg={6}>
        <div className={footerFollowSection}>
          <p>(C) 2020 FreightTrust and Clearing Corporation</p>
        </div>
      </Column>
    </Row>
  </div>
);

export default CustomFooter;
