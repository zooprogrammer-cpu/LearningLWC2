public with sharing class AccountController {
    @AuraEnabled(cacheable=true) 
    public static List<Account> getAccountList(){
        return [SELECT Id, Name, Type, Industry from Account LIMIT 5];
    }

    @AuraEnabled(cacheable=true) 
    public static List<Account> filterAccountTypeType(String type){
        return [SELECT id, Name, Type, Industry from Account where Type=:type LIMIT 5];
    }

    @AuraEnabled(cacheable=true) 
    public static List<Account> findAccounts(String searchKey){
        String key ='%' + searchKey + '%';

        return [SELECT id, Name, Type, Industry from Account
        WHERE Name LIKE:key LIMIT 5];
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountRecordWithRelatedContactList(Id recordId) {

        List <Account> accountList = new List<Account>();
        accountList =  [Select Id,(Select Id, FirstName, LastName, Title, Phone, Email FROM Contacts) from Account WHERE Id = :recordId];

        return accountList;
    }

    @AuraEnabled(cacheable=true)
   public static List<Opportunity> getOpps( String searchKey, String sortBy,String sortDirection) {
      
       String query = 'SELECT Id, Name,StageName,CloseDate FROM Opportunity';
       system.debug('query---'+query);
       if ( searchKey != null && searchKey != '' ) {
           String key = '%' + searchKey + '%';
           query += ' WHERE Name LIKE :key';
       }
       if ( sortBy != null && sortDirection != null ) {
           query += ' ORDER BY ' + sortBy + ' ' + sortDirection;
       }
       query = query + ' LIMIT 10';
       return Database.query( query );
   }

    
}