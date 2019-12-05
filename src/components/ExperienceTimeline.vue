<template>
  <div id="experienceTimeline">
    <el-timeline>
      <el-timeline-item
        v-for="(job, index) in jobs"
        :key="index"
        :icon="job.icon"
        :type="job.type"
        :color="job.color"
        :size="job.size"
        :timestamp="job.timestamp"
        placement="top"
        class="timeline"
      >
        <p class="company">{{job.company}}</p>
        <p class="position">{{job.position}}</p>
        <el-card>
          <div class="descs" v-html="job.desc"></div>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>
<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "ExperienceTimeline",
  components: {},
  props: {},
  data() {
    return {
      jobs: [
        {
          company: "ItemMania Network Technology Co., Ltd.",
          timestamp: "Oct 2018 - current",
          size: "large",
          type: "primary",
          // icon: "el-icon-more",
          color: "#0bbd87",
          position: "Tech Lead / Product Owner",
          desc:
            "<div> As the tech lead t ItemMania, I’m responsible for the planning, design, implementation and hiring of the company's New Products/R&D team. I also setup and manage all infrastructure..<br />\
- Hiring of new talent to join our ranks.<br />\
- Planning, design and implementation for redmist.gg, apexsquad.gg, harrypotterwizards.com and gamenanza.com.<br />\
- Server and service configuration and maintenance, most of them using Debian or Ubuntu.<br />\
- Implementation of CD and CI.<br />\
- Domain registration, SSL and DNS configuration.<br />\
- Implementation of SCRUM-like project management workflow.<br />\
- Overview code pushes and assure codebase is always clean through code reviews or peer reviews.<br />\
- Took the mantle of “DPO” to start the process of turning our websites to be GDPR compliant..<br /><br />\
As the Product Owner for our main product, playerauctions.com (one of the oldest marketplaces for gaming related items, currencies and accounts established in 1999.)<br />\
- Research and come up with new functionality to bring more traffic to PlayerAuctions.<br />\
- Write requirements for these new functionalities and or changes.<br />\
- Make sure everything runs within the estimated timeframe and budgets.<br />\
- Communicate with the marketing department for SEO strategies.<br />\
- Do final round of tests to make sure everything follows the provided requirements.</div>"
        },
        {
          company: "BergJet Industrial Fans Co., Ltd.",
          timestamp: "Dec 2016 – Jul 2018",
          position: "Chief System Programmer / Chief Technology Officer",
          desc:
            "<div>My role at BergJet was somewhat complicated and I ended up responsible for anything related to IT and Software Development.<br /> - Maintenance of their old ERP system developed originally in C# and was being discontinued.<br />\
- Design, develop and implement a new ERP system, written with a mix of PHP and Python. This touched all departments of the company and improved production output by almost 50%.<br />\
- Project management for the ERP system, communicating with the shareholders and establishing goals and timelines, as well as writing all requirements and documentation needed.<br />\
- Set up, maintenance and management of BergJet’s web servers hosted on Aliyun Hong Kong.<br />\
- Migration from Azure to Aliyun.<br />\
- Implementation of good programming practices, source control and standardized development environments.<br />\
- New company website.<br />\
- Responsible for assigning IT tasks for our IT staff, this included anything related to account creation, computer setup, networking, permissions, etc.<br />\
- Hiring new developers and IT administrators.<br />\
- Create new company policies and guidelines for IT and equipment.</div>"
        },
        {
          company: "Tweedle",
          timestamp: "Jul 2016 – Dec 2016",
          size: "normal",
          position: "R&D Manager",
          desc:
            "<div>Tweedle was a startup that offered photographic services for high-end events. They had a windows application that showed pictures taken throughout an event that people could use and get on their phones.<br />\
- Setting up and managing servers and databases (MySQL and MongoDB).<br />\
- Managing DNS and ICP licenses in Aliyun China.<br />\
- Develop new photo booth application, originally planned to have a Python back-end with a Electron/Node.JS front-end.<br />\
- Maintenance of their existing photo application, called PhotoTouch and developed originally in C# + PHP (with Symfony).<br />\
- Integration of WeChat’s API into PhotoTouch.<br />\
- Custom made application for customers to use during their events.<br />\
- Response for searching & hiring of new developers. </div>"
        },
        {
          company: "ChinaNetCloud",
          timestamp: "Nov 2015 – Jul 2016",
          position: "Software Engineer",
          desc:
            "<div>During my time at ChinaNetCloud I’ve lad the development of one of the most important internal tools, which was a ticketing system running on top of SugarCRM, as well as being responsible for ChinaNetCloud’s CI and GitLab services. Also took part in the development of OpsStack (now Siglos.io), which is a SaaS server administration platform. I was also the “go to” person for anything related to PHP and UI/UX.<br />\
- Development and lead of SugarTools, a ticketing system running on top of SugarCRM.<br />\
- GitLab administration, that was mostly all about creating new users and assign permissions.<br />\
- Jenkins administration, setting up CI.<br />\
- OpsStack, mostly responsible for the ticketing part of it. Was also the main person taking decisions when it came to UI and UX. OpsStack runs on Laravel and React.<br />\
- SlackBot, we had a small Slack bot that learned some useful stuff and tracked deployment times. Useful for project management purposes.<br />\
- Developed their new “Action Plan” feature, which was required for server admins to ask permission to change vital settings on customer servers.</div>"
        },
        {
          company: "Jomall International Trading Co., Ltd.",
          timestamp: "Oct 2013 – Sep 2015",
          position: "Chief Technology Officer",
          desc:
            "<div>Jomall was a joint venture with a local Chinese partner and we wanted to be the bridge between local companies and foreign customers. We wanted to make sure our customers could have their products “out there” to potential foreign clients. My role at the company, apart from being one of the owners, was a more technical one and for the most part, was to find exploits in Alibaba’s listing algorithm to assure first page product listings.<br />\
- Alibaba scripts for keyword generation for first page listings.<br />\
- Alibaba scripts for mass upload of products, at the time, one of the easiest ways to assure good page rankings.<br />\
- CRM platform to track orders, customers and anything order related.<br />\
- Website and SEO.<br />\
- Hiring and training of new employees for customer and after sales service.<br />\
- Customer and after sales support.</div>"
        },
        {
          company: "Millenniumbcp",
          timestamp: "Mar 2011 – Nov 2011",
          position: "Software Engineer",
          desc:
            "<div>Millenniumbcp is the largest private bank in Portugal. My role at this place was to take over the front-end development of their home banking application of their Romanian branch. I was the sole developer and owner of the Romanian project and it was my responsibility to ensure the website to be bug-free and add new features.<br />\
- I worked there during the time mobile apps started becoming popular, so there was a lot of work between me and the team developing the mobile app to make sure everything worked properly. I’ve mostly worked on authentication features.<br />\
- Update of their corporate web page, everything in SharePoint.<br />\
- Integration of SMS authentication (SOAP/XML web services). This was mostly done in C# and Quartz.<br />\
- Preparation of all DLL packages for deployment.<br />\
- Assist the main team of Millenniumbcp Portugal by providing C# expertise when necessary.<br />\
- Started the development of their new personal home banking pages, in C#.</div>"
        },
        {
          company: "Logica",
          timestamp: "Aug 2010 – Feb 2011",
          position: "Software Engineer",
          desc:
            "<div>EDP is the biggest electricity provider in Portugal and I was part of a small team of five members that was developing internal tools. I was in several projects but the one where I’ve spent the longest was a rather complex internal ERP system in C#.<br />\
- Took part of the team that was developing a kind of employee management system, kind of like Facebook, for internal use. This was developing in OutSystems.<br />\
- Development of new internal tools for upper management use. C#.<br />\
- Took part of revamping several internal projects in terms of design and consistency. This was very CSS and HTML intensive.</div>"
        },
        {
          company: "Nokia Siemens Networks",
          timestamp: "Jun 2008 – May 2009",
          position: "Software Engineer (Remote)",
          desc:
            "<div>Nokia Siemens Networks was a world leading company in the mobile network segment. I was responsible for a whole network of PicoBTS (small mobile anthenas nodes) and made sure the network worked flawlessly. This required high understanding of GSM and 3G technology. Additionally, I was developing small applications to help us on our day to day duties.<br />\
- Improvement of existing tools to make our workflow easier and faster. This included a script in Visual Basic that made an 8 hour plus task into 5 minutes one.<br />\
- Development of several small tools that helped keeping organized.<br />\
- Made existing Excel files obsolete and transformed them into tools.</div>"
        }
      ]
    };
  },
  methods: {},
  mounted: function() {}
};
</script>

<style lang="scss" scoped>
@import url("//unpkg.com/element-ui@2.13.0/lib/theme-chalk/index.css");
.timeline {
  text-align: left;
}
.position {
  color: #42a6f1;
}
// .descs {
//   /deep/ div {
//     text-align: left !important;
//   }
// }
</style>