public with sharing class AccountController {
    @AuraEnabled(cacheable=true) 
    public static List<Account> getAccountList(){
        return [SELECT Id, Name, Type, Industry from Account LIMIT 5];
    }

    @AuraEnabled(cacheable=true) 
    public static List<Account> filterAccountTypeType(String type){
        return [SELECT id, Name, Type, Industry from Account where Type=:type LIMIT 5];
    }
    
}
