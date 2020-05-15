
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

const host = '127.0.0.1'
const port = 3000

const path_quality_report = 'C:/Users/Rina/.jenkins/workspace/CodeQuality/target/site';
const path_coverage_report = 'C:/Users/Rina/.jenkins/workspace/TestCoverage/target/site/cobertura';

router.get('', function(req,res){
	res.sendFile(path.join(__dirname + '/front.html'));
	app.use(express.static(__dirname + '/'));
});

router.get('/qualityReport', function(req,res){
	res.sendFile(path.join(path_quality_report + '/checkstyle.html'));
	app.use(express.static(path_quality_report + '/'));
});

router.get('/coverageReport', function(req,res){
	res.sendFile(path.join(path_coverage_report + '/index.html'));
	app.use(express.static(path_coverage_report + '/'));
});

app.use('/', router);

app.listen(port, host, function() {
  console.log(`Server listens http://${host}:${port}`)
})

