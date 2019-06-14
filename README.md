# jsondoc.online
https://jsondoc.online

# Idea
Document your json contract, when sharing with other teams.     
This is tool i required in my job, where we might need to share the json contract with other teams, but we havnt implemented it yet and want to keep it documented.   


Documenting a json in google doc looses the readability and intutiveness, jsondoc.online allow json structure to be playable and keep documentation to handy.  
JsonSchema not standard.. In theory JSON Schema could serve this purpose, but in practice I am not sure it does.

# Tech Stack

I wanted to try server less hence below tech stack.

1. CloudFlare for SSL and cache
2. Json tokenizer inspired and mostl copied from https://ace.c9.io/
3. Storage on google cloud
4. Signed policy generator on google compute cloud function
5. website hosted on google cloud storage.
6. Vanilla JS, Jquery.
7. Attack Protection with google nocaptcha[invisiable]
8. CSS most from https://github.com/josdejong/jsoneditor/
9. Google Analytics

# TODOs
1. Structure Code Base
2. Introduce versioning
3. Remember collapse state of the tree


# HELP GIF

![helpGIF](/helpGIF.gif)
