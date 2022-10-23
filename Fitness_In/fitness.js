curl https://api.stripe.com/v1/products \
  -u sk_test_4eC39HqLyjWDarjtT1zdp7dc: \
  -d name="Gold Special"



  curl https://api.stripe.com/v1/prices \
  -u sk_test_4eC39HqLyjWDarjtT1zdp7dc: \
  -d product="{{prod_MfAOnwmIHbgpY7}}" \
  -d unit_amount=2000 \
  -d currency=usd

 
  prod_MfAOnwmIHbgpY7