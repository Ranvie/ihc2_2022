function ToggleMenu(id, classes)
{
    var menu = document.getElementById(id);
    var menuClasses = BreakWordsToArray(menu.className);

    if(ArrayContains(menuClasses, "collapsed"))
    {
        menu.setAttribute("class", classes + " hidden");
    }
    else
    {
        menu.setAttribute("class", classes + " collapsed");
    }

}

function BreakWordsToArray(text)
{
    var word = "";
    var wordsArray = new Array();
    
    for(var i=0; i < text.length; i++)
    {
        if(text[i] != " ")
        {
            word += text[i];
        }
        else
        {
            wordsArray.push(word);
            word = "";
        }
    }

    if(word != "")
    {
        wordsArray.push(word);
        word = "";
    }

    return wordsArray;
}

function ArrayContains(array, searchFor)
{
    var contain = false;

    for(var i=0; i < array.length && !contain; i++)
    {
        if(array[i] == searchFor)
        {
            contain = true;
        }
    }

    return contain;
}