public with sharing class refreshContactController {
    @AuraEnabled(cacheable= true)
    public static List<Contact> getContactList() {
        return [SELECT Id,firstName,lastName, Email FROM Contact LIMIT 10];
    }
}