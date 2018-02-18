package com.crypto.crypto.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.crypto.crypto.User;
import com.tunyk.currencyconverter.BankUaCom;
import com.tunyk.currencyconverter.api.Currency;
import com.tunyk.currencyconverter.api.CurrencyConverter;
import com.tunyk.currencyconverter.api.CurrencyConverterException;

import twitter4j.Query;
import twitter4j.QueryResult;
import twitter4j.Status;
import twitter4j.Twitter;
import twitter4j.TwitterException;
import twitter4j.TwitterFactory;
import twitter4j.conf.ConfigurationBuilder;

@RestController
public class CryptoController {
	
	
	private static String accessTokenTwitter = "3807061948-gMkgxbBqQANt4u3LyX1OXMSiYiFAWV8JZUhvq7m";
	private static String accessTokenSecret = "ApAjSaAytjy578XVf9Xo218haWEJdwZGrHtJ0EmqeBACW";
	private static String consumerKey = "ZhFYL7jHQ9htpBEFwxryV8VVH";
	private static  String consumerKeySecret = "Vr9MaTYhtoKKHZ0p7x4lTmikPSWFgeqfwR4z3PZhdlyw8M8nk0";
//    @CrossOrigin(origins = "http://localhost:4200")
//	@GetMapping("/test")
//	public List<User> test(){
//    	User user = new User();
//    	user.setName("biraj");
//    	User user1 = new User();
//    	user.setName("rasmi");
//    	List<User> userList = new ArrayList();
//    	userList.add(user);
//    	userList.add(user1);
//    	return userList;	
//	}
    
    @GetMapping("/convert")
    public String convertUSDEUR(){
    	String ret = "";
    	try {
			CurrencyConverter currencyConverter = new BankUaCom(Currency.USD, Currency.EUR);
			ret =  "" + currencyConverter.convertCurrency(1f);

		} catch (CurrencyConverterException e) {
			return "Error cannot convert";
		}
    	return  ret;
    	
    }
   // @CrossOrigin(origins = "http://localhost:4200")
  	@GetMapping("/tweets")
  	public List<Status> getTweets(){
  		ConfigurationBuilder cb = new ConfigurationBuilder();
        cb.setDebugEnabled(true)
          .setOAuthConsumerKey(consumerKey)
          .setOAuthConsumerSecret(consumerKeySecret)
          .setOAuthAccessToken(accessTokenTwitter)
          .setOAuthAccessTokenSecret(accessTokenSecret);
        TwitterFactory tf = new TwitterFactory(cb.build());
        Twitter twitter = tf.getInstance();
 
 
        List<Status> tweets = new ArrayList<>();
        try {
            Query query = new Query("bitcoin");
            QueryResult result;
            result = twitter.search(query);
             tweets = result.getTweets();
            for (Status tweet : tweets) {
                System.out.println("@" + tweet.getUser().getScreenName() + " - " + tweet.getText());
            }
        }
        catch (TwitterException te) {
            te.printStackTrace();
            System.out.println("Failed to search tweets: " + te.getMessage());
            System.exit(-1);
        }
      	return tweets;

  		
  	}
  	
 

}
