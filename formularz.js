function Test(regex,x)
{
    if(x.value=="")
    {
        x.style.backgroundColor="";
        return;
    }
    else if(!regex.test(x.value))
    {
        if(x.value!="")
        {
            x.style.backgroundColor="red";
            return;
        }
    }
    else
    {
        x.style.backgroundColor="green";
        return;
    }
    
    
}

function sprawdz(x)
{
    regex = /^[A-ZĄĆĘŁŃÓŚŻŹ][a-ząćłęńóśżź]{1,30}$/;
    Test(regex,x['imie']);
    regex = /^[A-ZĄĆĘŁŃÓŚŻŹ][a-ząćęłńóśćżź]{1,30}(-[A-ZĄĆĘŁŃÓŚŻŹ][a-ząćęłńóśćżź]{1,30})?$/;
    Test(regex,x['nazwisko']);
    regex = /^[A-ZĄĆĘŁŃÓŚŻŹ][a-ząćłęńóśżź]{2,30}$/;
    Test(regex,x['miejsce']);
    regex = /^\d{11}$/;
    Test(regex,x['pesel']);
    regex = /^\d{1,4}$/;
    Test(regex,x['nrdomu']);
    regex = /^\d{1,4}$/;
    Test(regex,x['nrmieszkania']);
    regex = /^[A-ZĄĆĘŁŃÓŚŻŹ][a-ząćłęńóśżź]{3,30}$/;
    Test(regex,x['miasto']);
    regex = /^\d{2}-\d{3}$/;
    Test(regex,x['kodpocztowy']);
    regex = /^\d{3}([-\s])?\d{3}([-\s])?\d{3}$/;
    Test(regex,x['telefon']);
    regex = /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]{2,30}([-\s][A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]{2,30})?([-\s][a-ząćęłńóśźż]{2,30})?$/;
    Test(regex,x['ulica']);
    //regex = /^\d{2}.\d{2}.\d{4}/;
    //Test(regex,x['data']);
}
