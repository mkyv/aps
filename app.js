
var certTable = angular.module('certTable', []);

certTable.controller('certTableController', function certTableController($scope, $http) {
    
    var team = {"team" : [
            {'name': 'Fernando Reich', 'certifications': ['Salesforce Certified Administrator', 'Salesforce Certified Application Architect', 'Salesforce Certified System Architect', 'Salesforce Certified B2C Commerce Developer', 'Salesforce Certified Industries CPQ Developer', 'Salesforce Certified OmniStudio Developer', 'Salesforce Certified Platform App Builder', 'Salesforce Certified Platform Developer I', 'Salesforce Certified Marketing Cloud Consultant', 'Salesforce Certified Marketing Cloud Email Specialist', 'Salesforce Certified Marketing Cloud Account Engagement Specialist', 'Salesforce Certified Experience Cloud Consultant', 'Salesforce Certified Field Service Consultant', 'Salesforce Certified OmniStudio Consultant', 'Salesforce Certified Sales Cloud Consultant', 'Salesforce Certified Service Cloud Consultant', 'Salesforce Accredited Sales Professional', 'Salesforce Certified Integration Architect', 'Salesforce Certified Data Architect', 'Salesforce Certified Development Lifecycle and Deployment Architect', 'Salesforce Certified Sharing and Visibility Architect', 'Salesforce Certified Identity and Access Management Architect', 'Salesforce Certified Tableau CRM and Einstein Discovery Consultant'], 'badges_img': 'https://res.cloudinary.com/trailhead/image/upload/public-trailhead/assets/images/ranks/double-star-ranger.png', 'badges': '270', 'point': '124357', 'trails': '20'},
            {'name': 'Claudio Cracco', 'certifications': ['Salesforce Certified Administrator', 'Salesforce Certified Advanced Administrator', 'Salesforce Certified Experience Cloud Consultant', 'Salesforce Certified OmniStudio Consultant', 'Salesforce Certified Sales Cloud Consultant', 'Salesforce Certified Service Cloud Consultant'], 'badges_img': 'https://res.cloudinary.com/trailhead/image/upload/public-trailhead/assets/images/ranks/double-star-ranger.png', 'badges': '201', 'point': '124975', 'trails': '21'},
            {'name': 'Mirko Yvancovich', 'certifications': ['Salesforce Certified Administrator', 'Salesforce Certified OmniStudio Developer', 'Salesforce Certified Platform App Builder', 'Salesforce Certified Platform Developer I', 'Salesforce Certified Business Analyst', 'Salesforce Certified Service Cloud Consultant'], 'badges_img': 'https://res.cloudinary.com/trailhead/image/upload/public-trailhead/assets/images/ranks/ranger.png', 'badges': '141', 'point': '79775', 'trails': '18'},
            {'name': 'Anyeli Rodriguez', 'certifications': ['Salesforce Certified Administrator', 'Salesforce Certified Industries CPQ Developer', 'Salesforce Certified OmniStudio Developer', 'Salesforce Certified Platform Developer I', 'Salesforce Certified Marketing Cloud Consultant', 'Salesforce Certified Marketing Cloud Email Specialist'], 'badges_img': 'https://res.cloudinary.com/trailhead/image/upload/public-trailhead/assets/images/ranks/expeditioner.png', 'badges': '76', 'point': '68032', 'trails': '2'},
            {'name': 'Facundo Etchegaray Lauretta', 'certifications': ['Salesforce Certified Administrator', 'Salesforce Certified OmniStudio Developer', 'Salesforce Certified Platform Developer I', 'Salesforce Certified Associate'], 'badges_img': 'https://res.cloudinary.com/trailhead/image/upload/public-trailhead/assets/images/ranks/mountaineer.png', 'badges': '36', 'point': '27725', 'trails': '5'},
            {'name': 'Nicolas Andres Seura Malla', 'certifications': ['Salesforce Certified Administrator', 'Salesforce Certified Platform App Builder', 'Salesforce Certified Platform Developer I', 'Salesforce Certified Associate'], 'badges_img': 'https://res.cloudinary.com/trailhead/image/upload/public-trailhead/assets/images/ranks/expeditioner.png', 'badges': '87', 'point': '58525', 'trails': '5'},
            {'name': 'Nicolas Mejia Nino', 'certifications': ['Salesforce Certified Administrator', 'Salesforce Certified OmniStudio Developer', 'Salesforce Certified Platform App Builder', 'Salesforce Certified Platform Developer I'], 'badges_img': 'https://res.cloudinary.com/trailhead/image/upload/public-trailhead/assets/images/ranks/mountaineer.png', 'badges': '33', 'point': '28925', 'trails': '1'},
            {'name': 'Jose Luis Blasco Ortiz', 'certifications': ['Salesforce Certified Administrator', 'Salesforce Certified Industries CPQ Developer', 'Salesforce Certified OmniStudio Developer', 'Salesforce Certified Platform Developer I'], 'badges_img': 'https://res.cloudinary.com/trailhead/image/upload/public-trailhead/assets/images/ranks/expeditioner.png', 'badges': '101', 'point': '47550', 'trails': '5'},
            {'name': 'Andre Rodrigues', 'certifications': ['Salesforce Certified OmniStudio Developer', 'Salesforce Certified Associate'], 'badges_img': 'https://res.cloudinary.com/trailhead/image/upload/public-trailhead/assets/images/ranks/ranger.png', 'badges': '162', 'point': '112150', 'trails': '20'},
            {'name': 'Giovanni Falco', 'certifications': ['Salesforce Certified Administrator', 'Salesforce Certified Industries CPQ Developer', 'Salesforce Certified Platform Developer I'], 'badges_img': 'https://res.cloudinary.com/trailhead/image/upload/public-trailhead/assets/images/ranks/expeditioner.png', 'badges': '54', 'point': '49802', 'trails': '1'},
            {'name': 'Javier Campos', 'certifications': [], 'badges_img': 'https://res.cloudinary.com/trailhead/image/upload/public-trailhead/assets/images/ranks/mountaineer.png', 'badges': '46', 'point': '33325', 'trails': '2'},
            {'name': 'Oscarina Gallardo', 'certifications': ['Salesforce Certified Administrator', 'Salesforce Certified Industries CPQ Developer', 'Salesforce Certified OmniStudio Developer', 'Salesforce Certified Platform Developer I'], 'badges_img': 'https://res.cloudinary.com/trailhead/image/upload/public-trailhead/assets/images/ranks/expeditioner.png', 'badges': '90', 'point': '78193', 'trails': '3'},
            {'name': 'Victor Pacheco', 'certifications': [], 'badges_img': 'https://res.cloudinary.com/trailhead/image/upload/public-trailhead/assets/images/ranks/expeditioner.png', 'badges': '63', 'point': '72725', 'trails': '3'},
            {'name': 'Juan M. Parra I.', 'certifications': ['Salesforce Certified Industries CPQ Developer', 'Salesforce Certified OmniStudio Developer', 'Salesforce Certified Platform Developer I'], 'badges_img': 'https://res.cloudinary.com/trailhead/image/upload/public-trailhead/assets/images/ranks/mountaineer.png', 'badges': '40', 'point': '37150', 'trails': '0'},
            {'name': 'Lautaro Tolosa', 'certifications': ['Salesforce Certified Administrator', 'Salesforce Certified Industries CPQ Developer', 'Salesforce Certified OmniStudio Developer', 'Salesforce Certified Platform Developer I'], 'badges_img': 'https://res.cloudinary.com/trailhead/image/upload/public-trailhead/assets/images/ranks/ranger.png', 'badges': '122', 'point': '61825', 'trails': '16'},
            {'name': 'Mariano García de la Fuente', 'certifications': ['Salesforce Certified Associate'], 'badges_img': 'https://res.cloudinary.com/trailhead/image/upload/public-trailhead/assets/images/ranks/ranger.png', 'badges': '162', 'point': '76450', 'trails': '18'},
            {'name': 'Tiago Sobreira', 'certifications': ['Salesforce Certified Administrator'], 'badges_img': 'https://res.cloudinary.com/trailhead/image/upload/public-trailhead/assets/images/ranks/ranger.png', 'badges': '174', 'point': '104450', 'trails': '23'},
            {'name': 'Yan Silva', 'certifications': [], 'badges_img': 'https://res.cloudinary.com/trailhead/image/upload/public-trailhead/assets/images/ranks/expeditioner.png', 'badges': '74', 'point': '39225', 'trails': '7'},
            {'name': 'Yan Silva', 'certifications': [], 'badges_img': 'https://res.cloudinary.com/trailhead/image/upload/public-trailhead/assets/images/ranks/triple-star-ranger.png', 'badges': '559', 'point': '193900', 'trails': '78'},
            {'name': 'Ramiro De Lorenzo', 'certifications': [], 'badges_img': 'https://res.cloudinary.com/trailhead/image/upload/public-trailhead/assets/images/ranks/mountaineer.png', 'badges': '47', 'point': '31450', 'trails': '2'},
            {'name': 'Jose Ortiz Gomez', 'certifications': [], 'badges_img': 'https://res.cloudinary.com/trailhead/image/upload/public-trailhead/assets/images/ranks/mountaineer.png', 'badges': '66', 'point': '33825', 'trails': '6'},
            {'name': 'Melissa J. Melendez Zamora', 'certifications': [], 'badges_img': 'https://res.cloudinary.com/trailhead/image/upload/public-trailhead/assets/images/ranks/explorer.png', 'badges': '10', 'point': '6750', 'trails': '0'},
            {'name': 'David Bujan', 'certifications': ['Salesforce Certified Administrator'], 'badges_img': 'https://res.cloudinary.com/trailhead/image/upload/public-trailhead/assets/images/ranks/explorer.png', 'badges': '10', 'point': '3475', 'trails': '1'}
        ]};
    $scope.team = team;
});

function imgCertControler($scope,  $element, $attrs) {
    var certis = {
            "Salesforce Certified User Experience (UX) Designer" : "https://developer.salesforce.com/resources2/certification-site/images/Certifications-logo/UX%20Designer.png",
            "Salesforce Certified Strategy Designer" : "https://developer.salesforce.com/resources2/certification-site/images/Certifications-logo/Strategy%20Designer.png",
            "Salesforce Certified Administrator" : "https://developer.salesforce.com/resources2/certification-site/images/Certifications-logo/Administrator.png",
            "Salesforce Certified Advanced Administrator" : "https://developer.salesforce.com/resources2/certification-site/images/Certifications-logo/Advanced-Administrator.png",
            "Salesforce Certified CPQ Specialist" : "https://developer.salesforce.com/resources2/certification-site/images/Certifications-logo/CPQ-Specialist.png",
            "Salesforce Certified Marketing Cloud Administrator" : "https://developer.salesforce.com/resources2/certification-site/images/Certifications-logo/Marketing-Cloud-Administrator.png",
            "Salesforce Certified Application Architect" : "https://developer.salesforce.com/resources2/certification-site/images/Certifications-logo/Application-Architect.png",
            "Salesforce Certified B2B Solution Architect" : "https://developer.salesforce.com/resources2/certification-site/images/Certifications-logo/B2B-Solution-Architect.png",
            "Salesforce Certified B2C Solution Architect" : "https://developer.salesforce.com/resources2/certification-site/images/Certifications-logo/B2C-Solution-Architect.png",
            "Salesforce Certified B2C Commerce Architect" : "https://developer.salesforce.com/resources2/certification-site/images/Certifications-logo/B2C-Commerce-Architect.png",
            "Salesforce Certified Heroku Architect" : "https://developer.salesforce.com/resources2/certification-site/images/Certifications-logo/Heroku%20Architect.png",
            "Salesforce Certified System Architect" : "https://developer.salesforce.com/resources2/certification-site/images/Certifications-logo/System-Architect.png",
            "Salesforce Certified Technical Architect" : "https://developer.salesforce.com/resources2/certification-site/images/Certifications-logo/Technical-Architect.png",
            "Salesforce Certified B2C Commerce Developer" : "https://developer.salesforce.com/resources2/certification-site/images/Certifications-logo/B2C-Commerce-Developer.png",
            "Salesforce Certified Industries CPQ Developer" : "https://developer.salesforce.com/resources2/certification-site/images/Certifications-logo/Industries-CPQ-Developer.png",
            "Salesforce Certified JavaScript Developer I" : "https://developer.salesforce.com/resources2/certification-site/images/Certifications-logo/JavaScript-Developer-I.png",
            "Salesforce Certified OmniStudio Developer" : "https://developer.salesforce.com/resources2/certification-site/images/Certifications-logo/OmniStudio-Developer.png",
            "Salesforce Certified Platform App Builder" : "https://developer.salesforce.com/resources2/certification-site/images/Certifications-logo/Platform-App-Builder.png",
            "Salesforce Certified Platform Developer I" : "https://developer.salesforce.com/resources2/certification-site/images/Certifications-logo/Platform-Developer-I.png",
            "Salesforce Certified Platform Developer II" : "https://developer.salesforce.com/resources2/certification-site/images/Certifications-logo/Platform-Developer-II.png",
            "Salesforce Certified Sales Representative" : "https://developer.salesforce.com/resources2/certification-site/images/Certifications-logo/Sales-Representative.png",
            "Salesforce Certified Marketing Cloud Consultant" : "https://developer.salesforce.com/resources2/certification-site/images/Certifications-logo/Marketing-Cloud-Consultant.png",
            "Salesforce Certified Marketing Cloud Developer" : "https://developer.salesforce.com/resources2/certification-site/images/Certifications-logo/Marketing-Cloud-Developer.png",
            "Salesforce Certified Marketing Cloud Email Specialist" : "https://developer.salesforce.com/resources2/certification-site/images/Certifications-logo/Marketing-Cloud-Email-Specialist.png",
            "Salesforce Certified Marketing Cloud Account Engagement Consultant" : "https://developer.salesforce.com/resources2/certification-site/images/Certifications-logo/marketing-cloud-account-engagement-consultant.png",
            "Salesforce Certified Marketing Cloud Account Engagement Specialist" : "https://developer.salesforce.com/resources2/certification-site/images/Certifications-logo/marketing-cloud-account-engagement-specialist.png",
            "Salesforce Certified Business Analyst" : "https://developer.salesforce.com/resources2/certification-site/images/Certifications-logo/Business%20Analyst.png",
            "Salesforce Certified Data Cloud Consultant" : "https://developer.salesforce.com/resources2/certification-site/images/Certifications-logo/datacloudconsultant.png",
            "Salesforce Certified Education Cloud Consultant" : "https://developer.salesforce.com/resources2/certification-site/images/Certifications-logo/Education-Cloud-Consultant.png",
            "Salesforce Certified Experience Cloud Consultant" : "https://developer.salesforce.com/resources2/certification-site/images/Certifications-logo/Experience-Cloud-Consultant.png",
            "Salesforce Certified Field Service Consultant" : "https://developer.salesforce.com/resources2/certification-site/images/Certifications-logo/Field-Service-Consultant.png",
            "Salesforce Certified Nonprofit Cloud Consultant" : "https://developer.salesforce.com/resources2/certification-site/images/Certifications-logo/Nonprofit-Cloud-Consultant.png",
            "Salesforce Certified OmniStudio Consultant" : "https://developer.salesforce.com/resources2/certification-site/images/Certifications-logo/OmniStudio-Consultant.png",
            "Salesforce Certified Sales Cloud Consultant" : "https://developer.salesforce.com/resources2/certification-site/images/Certifications-logo/Sales-Cloud-Consultant.png",
            "Salesforce Certified Service Cloud Consultant" : "https://developer.salesforce.com/resources2/certification-site/images/Certifications-logo/Service-Cloud-Consultant.png",
            "Salesforce Certified Tableau CRM & Einstein Discovery Consultant" : "https://developer.salesforce.com/resources2/certification-site/images/Certifications-logo/Tableau-CRM-and-Einstein-Discovery-Consultant.png",
            "Salesforce Certified AI Associate" : "https://developer.salesforce.com/resources2/certification-site/images/Certifications-logo/ai-associate.png?v=2",
            "Salesforce Certified Associate" : "https://developer.salesforce.com/resources2/certification-site/images/Certifications-logo/Associate.png",
            'Salesforce Accredited Sales Professional' : 'Picture 2.jpg',
            'Salesforce Certified B2C Commerce Developer' : 'https://developer.salesforce.com/resources2/certification-site/images/Certifications-logo/B2C-Commerce-Developer.png',
            'Salesforce Certified Field Service Consultant' : 'https://developer.salesforce.com/resources2/certification-site/images/Certifications-logo/Service-Cloud-Consultant.png',
            'Salesforce Certified OmniStudio Consultant' : 'https://developer.salesforce.com/resources2/certification-site/images/Certifications-logo/OmniStudio-Consultant.png',
            'Salesforce Certified Integration Architect' : 'https://developer.salesforce.com/resources2/certification-site/images/Certifications-logo/ID%20and%20Access%20Mgmt%20Architect.png',
            'Salesforce Certified Data Architect' : 'https://developer.salesforce.com/resources2/certification-site/images/Certifications-logo/Data%20Architect.png',
            'Salesforce Certified Development Lifecycle and Deployment Architect' : 'https://developer.salesforce.com/resources2/certification-site/images/Certifications-logo/ID%20and%20Access%20Mgmt%20Architect.png',
            'Salesforce Certified Sharing and Visibility Architect' : 'https://developer.salesforce.com/resources2/certification-site/images/Certifications-logo/Application-Architect.png',
            'Salesforce Certified Identity and Access Management Architect' : 'Picture 1.png',
            'Salesforce Certified Tableau CRM and Einstein Discovery Consultant' : 'https://www.salesforceben.com/wp-content/uploads/2021/07/SF-Certified_Tableau-CRM-and-Einstein-Discovery-Consultant-1024x1005.png'

        };
    $scope.logoSf = '';
    $scope.$watch('cer', function () {
        console.log(this.cer);
        $scope.logoSf = certis[this.cer];
        console.log($scope.logoSf );
    }.bind(this));
}


angular.module('certTable').component('imgCert', {
    template: "<img ng-src='{{ logoSf }}' alt='Certification' width=85px/>",
    controller: imgCertControler,
    bindings: {
        cer: '<'
    }
});
