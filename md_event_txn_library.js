function trans_pageInit() {
	//Change Class and Location to match Event Type on load from Project Record
	try {
	if (nlapiGetFieldValue('location').length == 0)
	{
		var jobType = nlapiGetFieldValue('custbody22');
		if (jobType == '8'){
			nlapiSetFieldValue('class',8);
			nlapiSetFieldValue('location',1);
		}
		else if (jobType == '6'){
			nlapiSetFieldValue('class',9);
			nlapiSetFieldValue('location',1);
		}
		else if (jobType == '1'){
			nlapiSetFieldValue('class',16);
			nlapiSetFieldValue('location',1);
		}
		else if (jobType == '7'){
			nlapiSetFieldValue('class',14);
			nlapiSetFieldValue('location',1);
		}
		else if (jobType == '5'){
			nlapiSetFieldValue('class',5);
			nlapiSetFieldValue('location',1);
		}
		else if (jobType == '3'){
			nlapiSetFieldValue('class',20);
			nlapiSetFieldValue('location',1);
		}
		else{
			nlapiSetFieldValue('class','');
		}
	}
	} catch (e) {
    }
	//Default tax to BTST Rate
	try {
	if (name == 'class')
	{
		nlapiSetFieldValue('taxitem',-505);
	}
	} catch (e) {
    }
}

function trans_fieldChanged(type, name) {
	//Change Class and Location to match Event Type
	try {
	if (name == 'custbody22')
	{
		var jobType = nlapiGetFieldValue('custbody22');
		if (jobType == '8'){
			nlapiSetFieldValue('class',8);
			nlapiSetFieldValue('location',1);
		}
		else if (jobType == '6'){
			nlapiSetFieldValue('class',9);
			nlapiSetFieldValue('location',1);
		}
		else if (jobType == '1'){
			nlapiSetFieldValue('class',16);
			nlapiSetFieldValue('location',1);
		}
		else if (jobType == '7'){
			nlapiSetFieldValue('class',14);
			nlapiSetFieldValue('location',1);
		}
		else if (jobType == '5'){
			nlapiSetFieldValue('class',5);
			nlapiSetFieldValue('location',1);
		}
		else if (jobType == '3'){
			nlapiSetFieldValue('class',20);
			nlapiSetFieldValue('location',1);
		}
		else{
			nlapiSetFieldValue('class','');
		}
	}
	} catch (e) {
    }
	//Default tax to BTST Rate
	try {
	if (name == 'class')
	{
		nlapiSetFieldValue('taxitem',-505);
	}
	} catch (e) {
    }
	//Quick Tax Field - Set Tax Location on Change
	try {
	if (name == 'custbody36')
	{
		var quickTax = nlapiGetFieldValue('custbody36');
		if (quickTax == '1'){
			nlapiSetFieldValue('taxitem',-265);
		}
		else if (quickTax == '2'){
			nlapiSetFieldValue('taxitem',-266);
		}
		else if (quickTax == '3'){
			nlapiSetFieldValue('taxitem',-266);
		}
		else if (quickTax == '4'){
			nlapiSetFieldValue('taxitem',-997);
		}
		else if (quickTax == '5'){
			nlapiSetFieldValue('taxitem',-996);
		}
		else if (quickTax == '6'){
			nlapiSetFieldValue('taxitem',-181);
		}
		else if (quickTax == '7'){
			nlapiSetFieldValue('taxitem',-184);
		}
		else if (quickTax == '8'){
			nlapiSetFieldValue('taxitem',-178);
		}
		else if (quickTax == '9'){
			nlapiSetFieldValue('taxitem',-213);
		}
		else if (quickTax == '10'){
			nlapiSetFieldValue('taxitem',-945);
		}
		else if (quickTax == '11'){
			nlapiSetFieldValue('taxitem',-796);
		}
		else if (quickTax == '12'){
			nlapiSetFieldValue('taxitem',-807);
		}
		else if (quickTax == '13'){
			nlapiSetFieldValue('taxitem',-808);
		}
		else if (quickTax == '14'){
			nlapiSetFieldValue('taxitem',-1873);
		}
		else if (quickTax == '15'){
			nlapiSetFieldValue('taxitem',-505);
		}
		else{
			nlapiSetFieldValue('taxitem',-505);
		}
	}
	} catch (e) {
    }
}