# Retouches chez Malika  
  
  <p align="center">  
    <img src="https://i.postimg.cc/V6sbKgsK/ffff.png" alt="Wireframe">  
  </p>
  
This is a Symfony 4.4 demo project for a sewing workshop, to manage orders.  

## Installation   
1. Clone project    
  
`git clone https://github.com/deniiiev/Retouches.git`  
 
2. Install composer dependencies    
    
`composer install`   

3. Install node dependencies  
    
`yarn install`  
  
then  
  
`yarn encore dev`  
  
4. Configure .env.local file and create database  
  
`php bin/console doctrine:database:create`   
`php bin/console doctrine:schema:update --force`   
`php bin/console doctrine:fixtures:load`   

5. Start server    
  
`symfony server:start`  
  
## Roles  
  
There are three roles in this project: employee, owner and admin  
  
#### Auto generated admin user:  
  
**Username:** demo    
**Password:** demo
