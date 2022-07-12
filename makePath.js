// Digistar Script 
// Created: 29/04/2022

function makePath() {
	var folderName = Ds.GetObjectAttr('folderPath', 'text');
	Ds.CreateObject('mySlides', 'slidesetClass');
	Ds.SetObjectAttr('mySlides', 'path', '$Content/Shows/Tests/' + folderName);
}