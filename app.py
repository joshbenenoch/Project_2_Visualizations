#!/usr/bin/env python
# coding: utf-8

# # Step 1 - Pulling Data
# 

# In[1]:


# needs to install libraries

# sudo pip install flask_sqlalchemy
# sudo pip install sqlalchemy


# In[2]:


# conda install flask_sqlalchemy
# conda install sqlalchemy


# In[2]:


# Import the Pandas library
import pandas as pd

# Python SQL toolkit and Object Relational Mapper
import sqlalchemy
from sqlalchemy import create_engine, MetaData
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine
from sqlalchemy import Column, Integer, String, Numeric, Text, Float, Date


from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)

import json
import requests
from pandas.io.json import json_normalize

import os
import numpy as np


# In[3]:


pd.set_option('display.max_rows', 500)
pd.set_option('display.max_columns', 500)


# In[4]:


# Import dependencies for NBA Data API pull from sportsdata.io
# Ex. https://api.sportsdata.io/v3/nba/stats/json/AllStars/2019?key={api_token}

api_token = '935d87475be94ab8895262863591210f'


# In[5]:


# Pull AllStar Data
api_url = "https://api.sportsdata.io/v3/nba/stats/json/AllStars/2019?key={0}".format(api_token)
response = requests.get(api_url)
AllStar_json = json.loads(response.content.decode('utf-8'))

AllStar_df = pd.DataFrame.from_dict(json_normalize(AllStar_json), orient='columns')
AllStar_df.head()


# In[6]:


# Pull TeamStats Data
api_url = "https://api.sportsdata.io/v3/nba/scores/json/TeamSeasonStats/2019?key={0}".format(api_token)
response = requests.get(api_url)
TeamStats_json = json.loads(response.content.decode('utf-8'))

TeamStats_df = pd.DataFrame.from_dict(json_normalize(TeamStats_json), orient='columns')
TeamStats_df = TeamStats_df.reindex(columns=list(TeamStats_json[0].keys()))
TeamStats_df.head()


# In[7]:


# Pull PlayerStats Data
api_url = "https://api.sportsdata.io/v3/nba/stats/json/PlayerSeasonStats/2019?key={0}".format(api_token)
response = requests.get(api_url)
PlayerStats_json = json.loads(response.content.decode('utf-8'))

PlayerStats_df = pd.DataFrame.from_dict(json_normalize(PlayerStats_json), orient='columns')
PlayerStats_df = PlayerStats_df.reindex(columns=list(PlayerStats_json[0].keys()))
PlayerStats_df.head()


# In[8]:


# Pull TeaminfoLogo Data
api_url = "https://api.sportsdata.io/v3/nba/scores/json/teams?key={0}".format(api_token)
response = requests.get(api_url)
TeaminfoLogo_json = json.loads(response.content.decode('utf-8'))

TeaminfoLogo_df = pd.DataFrame.from_dict(json_normalize(TeaminfoLogo_json), orient='columns')
TeaminfoLogo_df = TeaminfoLogo_df.reindex(columns=list(TeaminfoLogo_json[0].keys()))
TeaminfoLogo_df.head() 


# In[9]:


# Pull PlayerBio Data
api_url = "https://api.sportsdata.io/v3/nba/scores/json/Players?key={0}".format(api_token)
response = requests.get(api_url)
PlayerBio_json = json.loads(response.content.decode('utf-8'))

PlayerBio_df = pd.DataFrame.from_dict(json_normalize(PlayerBio_json), orient='columns')
PlayerBio_df = PlayerBio_df.reindex(columns=list(PlayerBio_json[0].keys()))
PlayerBio_df.head()


# In[ ]:


app = Flask(__name__)

@app.route("/")
def index():
    """Return the homepage."""
    return render_template("index.html")

@app.route('/AllStar')
def AllStar():   
    return jsonify(AllStar_json)

@app.route('/TeamStats')
def TeamStats():   
    return jsonify(TeamStats_json)

@app.route('/PlayerStats')
def PlayerStats():   
    return jsonify(PlayerStats_json)

@app.route('/TeaminfoLogo')
def TeaminfoLogo():   
    return jsonify(TeaminfoLogo_json)

@app.route('/PlayerBio')
def PlayerBio():   
    return jsonify(PlayerBio_json)


if __name__ == "__main__":
    app.run()

