package com.bankapp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.bankapp.entity.Account;
import com.bankapp.entity.AccountType;
import com.bankapp.entity.Employee;
import com.bankapp.entity.TransactionLog;
import com.bankapp.entity.TxType;
import com.bankapp.service.AccountService;
import com.bankapp.service.EmployeeService;
import com.bankapp.service.TransactionLogService;

@SpringBootApplication
public class BankAppBootApplication implements CommandLineRunner{

	@Autowired
	private AccountService as;
	@Autowired
	private TransactionLogService ts;
	
	@Autowired
	private EmployeeService es;
	
	public static void main(String[] args) {
		SpringApplication.run(BankAppBootApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		/*
		 * Account a=new Account("kavya", 5000.00, "vskp","8375427869146", "k@k.com",
		 * AccountType.SAVINGS); //as.addAccount(a); Account a1=new Account("sudha",
		 * 4000.00, "rgda","6543890567", "k@s.com", AccountType.SAVINGS);
		 * //as.addAccount(a1); Account a2=new Account("gathvik", 6000.00,
		 * "sklm","8654367890", "g@r.com", AccountType.SAVINGS); //as.addAccount(a2);
		 * Account a3=new Account("reyansh", 7000.00, "vzm","8456789345", "g@g.com",
		 * AccountType.SAVINGS); //as.addAccount(a3);
		 * 
		 * TransactionLog t=new TransactionLog("txInfo",100.00, TxType.DEPOSIT);
		 * a.getTransactionlog().add(t); as.addAccount(a);
		 */
		/*
		 * Employee e1=new Employee("kavya", "kavya123", new String[]
		 * {"ROLE_MGR","ROLE_EMP"}); Employee e2=new Employee("sudha", "sudha123", new
		 * String[] {"ROLE_EMP"}); Employee e3=new Employee("gathvik", "gathvik123", new
		 * String[] {"ROLE_EMP"});
		 * 
		 * es.addUser(e1); es.addUser(e2); es.addUser(e3);
		 * 
		 * System.out.println("employess added");
		 */
		
		 
	}

}
