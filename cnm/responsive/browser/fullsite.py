from Products.Five.browser import BrowserView
from Products.CMFCore.utils import getToolByName
import time

class SetFullSite(BrowserView):
    """Set a full site cookie and redirect
    """
    
    def __call__(self):
        REQUEST = self.request
        context = self.context
        response =  REQUEST.response
        response.setCookie('plonefullsite', 'True')
        
        referer = REQUEST.get_header("HTTP_REFERER") # Page referer (the page from user came from)
        if referer == None: # referer will be none if it was missing, so let's just set it to the portal root
            referer = context.portal_url()
        
        time.sleep(2) # Adding 2 second pause since it looks like with no pause sometimes the cookie doesn't update fast enough and old value is still there after redirect
        response.redirect(referer)

class ClearFullSite(BrowserView):
    """Clear the full site cookie and redirect
    """
    
    def __call__(self):
        REQUEST = self.request
        context = self.context
        response =  REQUEST.response        
        response.expireCookie('plonefullsite')
        
        referer = REQUEST.get_header("HTTP_REFERER") # Page referer (the page from user came from)
        if referer == None: # referer will be none if it was missing, so let's just set it to the portal root
            referer = context.portal_url()
        
        time.sleep(2)# Adding 2 second pause since it looks like with no pause sometimes the cookie doesn't update fast enough and old value is still there after redirect
        response.redirect(referer)
        
class AllowMobile(BrowserView):
    """Check full site cookie to see if mobile view is allowed
    """
    
    def __call__(self):
        REQUEST = self.request
        context = self.context        
        response =  REQUEST.response
        
        if 'plonefullsite' in REQUEST:
            return False
        else:
            return True    