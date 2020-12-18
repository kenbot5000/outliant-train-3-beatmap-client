<template>
    <div class="main-content">
        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-12 col-lg-10 col-xl-8">
                    <div id="alert">
                        <div class="header mt-md-5">
                            <div class="header-body">
                                <h1 class="header-title">
                                    Alerts
                                </h1>

                                <p class="header-subtitle">
                                    Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages. Please see the <a target="_blank" href="https://bootstrap-vue.org/docs/components/alerts">official Bootstrap documentation</a> for a full list of options.
                                </p> 
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <b-alert show variant="primary">Primary Alert</b-alert>
                                <b-alert show variant="secondary">Secondary Alert</b-alert>
                                <b-alert show variant="success">Success Alert</b-alert>
                                <b-alert show variant="danger">Danger Alert</b-alert>
                                <b-alert show variant="warning">Warning Alert</b-alert>
                                <b-alert show variant="info">Info Alert</b-alert>
                                <b-alert show variant="light">Light Alert</b-alert>
                                <b-alert show variant="dark">Dark Alert</b-alert>

                                <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>
                                    Dismissible Alert!
                                </b-alert>

                                <b-alert show variant="success">
                                    <h4 class="alert-heading">Well done!</h4>
                                    <p>
                                        Aww yeah, you successfully read this important alert message. This example text is going to
                                        run a bit longer so that you can see how spacing within an alert works with this kind of
                                        content.
                                    </p>
                                    <hr>
                                    <p class="mb-0">
                                        Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
                                    </p>
                                </b-alert>

                                <b-alert
                                    :show="dismissCountDown"
                                    dismissible
                                    variant="warning"
                                    @dismissed="dismissCountDown=0"
                                    @dismiss-count-down="countDownChanged"
                                >
                                <p>This alert will dismiss after {{ dismissCountDown }} seconds...</p>
                                <b-progress
                                    variant="warning"
                                    :max="dismissSecs"
                                    :value="dismissCountDown"
                                    height="4px"
                                ></b-progress>
                                </b-alert>

                                <b-button @click="showAlert" variant="info" class="m-1">
                                    Show alert with count-down timer
                                </b-button>
                                <b-button @click="showDismissibleAlert=true" variant="info" class="m-1">
                                    Show dismissible alert ({{ showDismissibleAlert ? 'visible' : 'hidden' }})
                                </b-button>
                            </div>
                        </div>
                    </div>
                    <div id="autosize">
                        <div class="header mt-md-5">
                            <div class="header-body">
                                <h1 class="header-title">
                                    Autosize
                                </h1>

                                <p class="header-subtitle">
                                    A small, stand-alone script to automatically adjust textarea height. You can pass any options supported by the plugin via the data-options attribute. The value must be a valid JSON object. Please read the official plugin documentation for a full list of options.
                                </p> 
                            </div>
                        </div>
                        
                        <div class="card">
                            <div class="card-body">                        
                                <textarea class="form-control" data-toggle="autosize" rows="1" placeholder="Try typing something..."></textarea>
                            </div>
                        </div>
                    </div>
                    <div id="avatar">
                        <div class="header mt-md-5">
                            <div class="header-body">
                                <h1 class="header-title">
                                    Avatar
                                </h1>

                                <p class="header-subtitle">
                                    A small, stand-alone script to automatically adjust textarea height. You can pass any options supported by the plugin via the data-options attribute. The value must be a valid JSON object. Please read the official plugin documentation for a full list of options.
                                </p> 
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <div style="font-size: 2rem">
                                    <b-avatar badge="BV"></b-avatar>
                                    <b-avatar badge="7" variant="primary" badge-variant="dark"></b-avatar>
                                    <b-avatar badge-variant="info" src="https://placekitten.com/300/300">
                                        <template v-slot:badge>
                                            <b-icon icon="star-fill"></b-icon>
                                        </template>
                                    </b-avatar>
                                    <b-avatar badge badge-variant="success"></b-avatar>
                                    <b-avatar badge badge-left></b-avatar>
                                    <b-avatar badge badge-variant="danger" badge-top></b-avatar>
                                    <b-avatar badge badge-left badge-top></b-avatar>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="badges">
                        <div class="header mt-md-5">
                            <div class="header-body">
                                <h1 class="header-title">
                                    Badges
                                </h1>

                                <p class="header-subtitle">
                                    A small count and labeling component. Please read the official Bootstrap documentation for a full list of options.    
                                </p> 
                            </div>
                        </div>
                        
                        <div class="card">
                            <div class="card-body">                        
                                <b-badge variant="primary">Primary</b-badge>
                                <b-badge variant="secondary">Secondary</b-badge>
                                <b-badge variant="success">Success</b-badge>
                                <b-badge variant="danger">Danger</b-badge>
                                <b-badge variant="warning">Warning</b-badge>
                                <b-badge variant="info">Info</b-badge>
                                <b-badge variant="light">Light</b-badge>
                                <b-badge variant="dark">Dark</b-badge>
                                <b-badge pill variant="primary">Primary</b-badge>
                                <b-badge pill variant="secondary">Secondary</b-badge>
                                <b-badge pill variant="success">Success</b-badge>
                                <b-badge pill variant="danger">Danger</b-badge>
                                <b-badge pill variant="warning">Warning</b-badge>
                                <b-badge pill variant="info">Info</b-badge>
                                <b-badge pill variant="light">Light</b-badge>
                                <b-badge pill variant="dark">Dark</b-badge>
                            </div>
                        </div>
                    </div>
                    <div id="breadcrumb">
                        <div class="header mt-md-5">
                            <div class="header-body">
                                <h1 class="header-title">
                                    Breadcrumb
                                </h1>

                                <p class="header-subtitle">
                                    Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS. Please read the official Bootstrap documentation for a full list of options.
                                </p> 
                            </div>
                        </div>
                        
                        <div class="card">
                            <div class="card-body">
                                <nav aria-label="breadcrumb">
                                    <b-breadcrumb :items="items"></b-breadcrumb>
                                </nav>                    
                            </div>
                        </div>
                    </div>
                    <div id="buttons">
                        <div class="header mt-md-5">
                            <div class="header-body">
                                <h1 class="header-title">
                                    Buttons
                                </h1>

                                <p class="header-subtitle">
                                    Use Bootstrap’s custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more. Please read the official Bootstrap documentation for a full list of options.
                                </p> 
                            </div>
                        </div>
                        
                        <div class="card">
                            <div class="card-body">
                                <b-button class="mb-2" variant="primary">Primary</b-button>
                                <b-button class="mb-2" variant="secondary">Secondary</b-button>
                                <b-button class="mb-2" variant="success">Success</b-button>
                                <b-button class="mb-2" variant="danger">Danger</b-button>
                                <b-button class="mb-2" variant="warning">Warning</b-button>
                                <b-button class="mb-2" variant="info">Info</b-button>
                                <b-button class="mb-2" variant="light">Light</b-button>
                                <b-button class="mb-2" variant="dark">Dark</b-button>
                                <b-button class="mb-2" variant="outline-primary">Primary</b-button>
                                <b-button class="mb-2" variant="outline-secondary">Secondary</b-button>
                                <b-button class="mb-2" variant="outline-success">Success</b-button>
                                <b-button class="mb-2" variant="outline-danger">Danger</b-button>
                                <b-button class="mb-2" variant="outline-warning">Warning</b-button>
                                <b-button class="mb-2" variant="outline-info">Info</b-button>
                                <b-button class="mb-2" variant="outline-light">Light</b-button>
                                <b-button class="mb-2" variant="outline-dark">Dark</b-button>                 
                            </div>
                        </div>
                    </div>
                    <div id="breadcrumb">
                        <div class="header mt-md-5">
                            <div class="header-body">
                                <h1 class="header-title">
                                    Breadcrumb
                                </h1>

                                <p class="header-subtitle">
                                    Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS. Please read the official Bootstrap documentation for a full list of options.
                                </p> 
                            </div>
                        </div>
                        
                        <div class="card">
                            <div class="card-body">
                                <nav aria-label="breadcrumb">
                                    <b-breadcrumb :items="items"></b-breadcrumb>
                                </nav>                    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
  export default {
    data() {
      return {
        dismissSecs: 10,
        dismissCountDown: 0,
        showDismissibleAlert: false,
        items: [
          {
            text: 'Admin',
            href: '#'
          },
          {
            text: 'Manage',
            href: '#'
          },
          {
            text: 'Library',
            active: true
          }
        ]
      }
    },
    methods: {
      countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
      },
      showAlert() {
        this.dismissCountDown = this.dismissSecs
      }
    }
  }
</script>