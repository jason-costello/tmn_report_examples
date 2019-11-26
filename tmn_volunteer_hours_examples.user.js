// ==UserScript==
// @namespace https://openuserjs.org/users/jasoncostello/
// @name TMNRptExamples
// @description this script adds examples for each logging category on the submit report page
// @updateURL https://openuserjs.org/meta/jasoncostello/
// @version 1.0.0
// @include https://tpwd.samaritan.com/recruiter/index.php
// @match https://tpwd.samaritan.com/recruiter/index.php
// @updateURL https://openuserjs.org/meta/jasoncostello/TMNRptExamples
//==/UserScript==

// ==OpenUserJS==
// @author jasoncostello
// ==/OpenUserJS==

try {

    var selection = document.evaluate(
        '//select[@id="reportservice"]',
        document,
        null,
        XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
        null);
    var selectionFound = selection.snapshotItem(0);

    if (selectionFound) {

        var divph = document.evaluate(
            "//form",
            document,
            null,
            XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
            null);
        console.log(divph);
        var c = document.createElement("div");

        for (var i = 0; i < divph.snapshotLength; i++) {

            var divph_i = divph.snapshotItem(i);

            var desc_html = `<table class='table table-hover table-bordered table-sm small' style="margin-top: 10px;">
            <thead>
                <tr>
                    <th>Code</th>
                    <th>Opportunity</th>
                    <th>Description</th>
                    <th>Examples</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>AT</td>
                    <td>Advanced Training</td>
                    <td>Advanced Training that you attend as a participant</td>
                    <td>
                        <ul >
                            <li>Chapter/NPSOT/Lunch &amp; Learn meetings</li>
                            <li>Project WILD (instructor /facilitator training</li>
                            <li>Cibolo NC/LBJWC/TMN/etc</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>CB</td>
                    <td>Chapter &amp; Program Business</td>
                    <td>Activities related to managing and running a Master Naturalist Chapter and its committees</td>
                    <td><ul>
                        <li>Board of Directors/Officers/Committee Chairs</li><li>Newsletter/website management</li><li>Management of chapter records</li><li>Hours or chapter reporting*Other chapter business</li>
</ul>
                    </td>
                </tr>
                <tr>
                    <td>FR</td>
                    <td>Field Research<br></br>(Including Surveys)</td>
                    <td>Planning, leading or participating in data collection and/or analysis of natural resources where the results are intended to further scientific knowledge</td>
                    <td>
<ul>
                        <li>CoCoRahs</li><li>Banding and tagging</li><li>Project Feeder Watch, MLMP, water testing, etc.</li>
</ul>
                    </td>
                </tr>
                <tr>
                    <td>NPA</td>
                    <td>Nature / Public Access</td>
                    <td>Field-based activities that improve and manage the the public's access to natural areas or resources. Creating and/or maintaining nature trails, wildscapes, and/or interpretive areas</td>
                    <td>
     <ul>                   <li>Developing new or improving existing:</li><li>Hiking trails</li><li>Gardens (interpretive, butterfly, habiscapes, etc.)</li><li>Wildlife viewing blinds</li><li>Wildscapes</li>
</ul>
                    </td>
                </tr>

                <tr>
                    <td>OT</td>
                    <td>Other</td>
                    <td>Animal Rescue Only</td>
                    <td>
                        <ul>
                            <li>Wild animal rescue</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>Public Outreach (Indirect)</td>
                    <td>Leading, organizing, or staffing an educational activity where participants come and go and are able to inquire on a variety of topics</td>
                    <td>Advanced Training that you attend as a participant</td>
                    <td>
                        <ul>
                            <li>Discovery Center</li><li>Trout Unlimited</li><li>Festivals</li><li>Traveling Trunks</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>RM</td>
                    <td>Natural Resource Management</td>
                    <td>Activities that improve the health of a natural area or resource. Natural resource management, restoration, rescue, and rehabilitation</td>
                    <td>
                        <ul>
                            <li>Invasive species or trash removal</li><li>Plant rescue</li><li>Restoring or improving natural habitat</li><li>Wildlife houses, towers, chimneys</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>TG</td>
                    <td>Technical Guidance</td>
                    <td>Any work that provides written management recommendations to land owners and/or land managers</td>
                    <td>
                        <ul>
                            <li>Writing ecosystem management plans</li><li>Land Management Assistance Program (LMAP)</li><li>City/Community/Regional governments</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>TR</td>
                    <td>Training and Educating<br />Others (Direct)</td>
                    <td>Leading, organizing, instructing, or staffing an educational activity where participants have a planned learning objective and generally stay for the full event (i.e. a planned start and end time)</td>
                    <td>
                        <ul>
                            <li>Workshops</li>
                            <li>Presentations</li>
                            <li>Webinars</li>
                            <li>Chapter MN trainees/interns</li>
                        </ul>
                    </td>
                </tr>
            </tbody> 
        </table>
<br />`;

            c.innerHTML = desc_html;
            divph_i.insertBefore(c, divph_i.childNodes[0]);
        }
    }
}

catch (e) {
    console.error(e);
}
