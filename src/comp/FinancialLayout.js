import React from 'react';
import "../CSS/FinancialStyles.css"
import { Accordion, AccordionItem } from './Accordian';

const FinancialLayout = () => {
  return (
    <div className="financial-layout">
      <div className="product-cost financial-section">
        <h2>Product Cost</h2>
        <p>
            <ul>
                <li>Raspberry pi - £30 each </li>
                <li>7” Touchscreen display - £39.99</li>
                <li>USB Microphone - £2.34 (bulk cost)</li>
                <li>USB Speaker - £4.35</li>
                <li>Display adapter cable - £1.00</li>
            </ul>
            <br/>
        <strong>Total Cost = £77.70</strong>
        </p>
      </div>

      <div className="operational-cost financial-section">
        <h2>Operational Cost</h2>
        <ul>
            <li>LLM Training</li>
            <li>Software Updates</li>
            <li>Repairs</li>
            <li>Shipping</li>
            <li>Staff</li>
        </ul>
        <br/>
        <p><strong>Estimate operational costs add up to £150,000. </strong>
        </p>
      </div>

      <div className="section-image-main">
            <img src="https://www.moneypatrol.com/moneytalk/wp-content/uploads/2022/02/Investment.jpg" alt="Market Analysis" />
      </div>

      <div className="market-analysis financial-section">
        <h2>Market Analysis</h2>
        <Accordion>
                <AccordionItem title="Competitors">
                    <strong><p> Software Only:</p></strong>
                    <ul>
                    <br/>
                        <li><a href="https://interviewprep-ai.com/" target="_blank" rel="noopener noreferrer">Interview Prep AI</a> - Free trial, €10/month. </li>
                        <li><a href="https://huru.ai/ " target="_blank" rel="noopener noreferrer">Huru</a> - Free trial, $10/month or $299 lifetime deal.</li>
                        <li><a href="https://myinterviewpractice.com/" target="_blank" rel="noopener noreferrer">My Interview Practice</a> - $49/month.</li>
                        <li><a href="https://interviewschool.com/" target="_blank" rel="noopener noreferrer">Interview School</a> - Free version, $60/year </li>
                    </ul>
                    <br/>
                    <strong><p>Hardware Included:</p></strong>
                    <ul>
                    <br/>
                        <li>Nothing found.</li>
                    </ul>
                </AccordionItem>

                <AccordionItem title="Beachhead Market">
                    <strong><p>University students / Recent graduates</p></strong>
                    <br/>
                      <ul>
                        <li>High demand, as students will be looking for internships and graduates for jobs. </li>
                        <li>Device will be affordable so that students and graduates can afford it easily. </li>
                        <li>A young demographic would be more suited to use new technology such as an AI powered interview trainer.</li>
                        <li>Universities provide a targeted market that can be effectively reached through advertising within universities, career service departments, job fairs etc.</li>
                        <li>Satisfied customers will grow our market through word-of-mouth within our target market. </li>
                      </ul>
                      <br/>
                  
                    <strong><p>University Career Services / Career Centres</p></strong>
                    <br/>
                      <ul>
                        <li>Our product would offer an innovative and cutting-edge tool to prepare students and jobseekers to enter the job market. </li>
                        <li>Concentrated target market - career centres have a large pool of potential users who would be looking for jobs and need interview preparation.  </li>
                        <li>Job seekers often turn to career services / career centres for guidance and introducing our device through these services can increase its credibility and adoption. </li>
                        <li>There is bulk purchase potential through universities and career services who may want to use it as a resource for jobseekers. </li>
                        <li>Continuous market - each year, new students and jobseekers will be in the position to benefit from our device.</li>
                        <li>Networking opportunities may arise from partnering with universities and career services, as they could recommend our product to other institutions.  </li>
                      </ul>
                </AccordionItem>

                <AccordionItem title="Statistical Market Data">
                <strong><p>University students / Recent graduates</p></strong>
                <br/>
                    <ul>
                      <li>2021/22 there were 2.86 million students in higher education in the UK.</li>
                      <li>2021/22 there were 919,940 higher education qualifications awarded, including 390,585 postgraduate qualifications and 439,115 first degrees .</li>
                    </ul>
                    <br/>
                    <strong><p>University Career Services / Career Centres</p></strong>
                    <br/>
                    <ul>
                      <li>2021/22 there were 288 higher education institutions in the UK.</li>
                    </ul>
                </AccordionItem>

                <AccordionItem title="Secondary and Tertiary Education Institutions in the UK">
          
                <br/>
                <div className="section-image-institutions">
                  <img src="https://firebasestorage.googleapis.com/v0/b/real-estate-755f5.appspot.com/o/institution.png?alt=media&token=ad40cef5-ea32-4a56-8c90-7c495d75c3f7stitutions.png" alt="Institution" style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto', display: 'block', margin: 'auto' }} />
                  </div>

                </AccordionItem>



        </Accordion>
      </div>

      <div className="customer-acquisition-strategy financial-section">
        <h2>Customer Acquisition Strategy</h2>
        <strong><p>University students / Recent Graduates:</p></strong>
        <br/>
        <ul>
          <li>Campus job fairs - demonstrate the device.</li>
          <li>Partner with student organisations to promote the device.</li>
          <li>Advertise on student platforms such as student newspapers.</li>
          <li>Provide student discount to attract customers.</li>
        </ul>
        <br/>
        <strong><p>University Career Services / Career Centres</p></strong>
        <br/>
        <ul>
          <li>Attend career service events to showcase the device.</li>
          <li>Offer discount for bulk purchases.</li>
        </ul>
      </div>
      <div className="value-proposition financial-section">
        <h2>Value Proposition</h2>
        <ul>
          <li>Educational device </li>
          <li>Adaptive interview preparation</li>
          <li>Realistic mock interviews </li>
          <li>All-in-one device</li>
        </ul>
      </div>

      <div className="financial-projections financial-section">
        <h2>Financial Projections</h2>
        <Accordion>
                <AccordionItem title="Income Statement Projections">
                  <ul>
                    <li><strong>Net sales (Year 1)</strong> - £750,000 (5000 units at £150) </li>
                    <li><strong>Product manufacturing cost</strong> - £388,500 </li>
                    <li><strong>Operational cost</strong> - £150,000 </li>
                    <li><strong>Gross Profit</strong> - £361,500 </li>
                    <li><strong>EBIT</strong> - £211,500 </li>
                    <li><strong>Net income</strong> - £169,200</li>
                  </ul>
                </AccordionItem>

                <AccordionItem title="Funding and Capital Structure">
                  <ul>
                    <li><strong>Total assets </strong> - £1,011,500</li>
                    <li><strong>Current assets </strong> - £750,000</li>
                    <li><strong>Total liabilities </strong> - £200,000 (initial loan cost)</li>
                    <li><strong>Current liabilities</strong> - £200,000</li>
                  </ul>
                </AccordionItem>

                <AccordionItem title="Altman Z''-Score Analysis">
                  <ul>
                    <li><strong>Working capital</strong> - £550,000 (Total assets - total liabilities)</li>
                    <li><strong>Total assets</strong> - £1,011,500</li>
                    <li><strong>Retained earnings</strong> - £169,200 (2/3 of net income reinvested)</li>
                    <li><strong>EBIT</strong> - £211,500 (operating income before tax)</li>
                    <li><strong>Book value of equity</strong> - £811,500 (Current assets - current liabilities)</li>
                    <li><strong>Book value of total debt</strong> - £200,000 (Total liabilities - current liabilities) </li>
                  </ul>
                </AccordionItem>

                <AccordionItem title="Calculation of the Altman Z''-Score">
                  <div className="altman-score-wrapper">
                    <table className="altman-score-table">
                      <thead>
                        <tr>
                          <th>Altman Z''-Score Calculation</th>
                          <th>Values</th>
                          <th>Result</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>X1 = Working Capital / Total Assets</td>
                          <td>550,000 / 1,011,500</td>
                          <td>0.5437</td>
                        </tr>
                        <tr>
                          <td>X2 = Retained Earnings / Total Assets</td>
                          <td>169,200 / 1,011,500</td>
                          <td>0.1673</td>
                        </tr>
                        <tr>
                          <td>X3 = EBIT / Total Assets</td>
                          <td>211,500 / 1,011,500</td>
                          <td>0.2091</td>
                        </tr>
                        <tr>
                          <td>X4 = Market Value of Equity / Total Liabilities</td>
                          <td> 811,500 / 200,000</td>
                          <td>4.0575</td>
                        </tr>
                        <tr>
                          <td colSpan="2">Z''-Score = 3.25 + (6.56 * X1) + (3.26 * X2) + (6.72 * X3) + (1.05 * X4)</td>
                         <td><strong>13.0276</strong></td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                </AccordionItem>
        </Accordion>
        </div>

        <div className="section-image-financial">
            <img src="https://www.arounddb.com/wp-content/uploads/2024/01/insider-3.png" alt="Market Analysis" />
        </div>
      </div>
  );
};

export default FinancialLayout;

