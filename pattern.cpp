#include<iostream>
using namespace std;
void pattern1(int n){
     for(int i=1; i<=n; i++){
        for(int j=1; j<=i; j++){
            cout<<"*";
        } 
        cout<<endl;
    }
}
void pattern2(int n){
    for(int i=n; i>=1; i--){
        for(int j=1; j<=i; j++){
            cout<<"*";
        } 
        cout<<endl;
    }
}

void pattern3(int n){
    for(int i=1; i<=n; i++){
        for(int j=1; j<=n; j++){
            if(j==1 || i==n){
                cout<<"*";
            }
        }
        cout<<endl;
    }
}

void pattern4(int n){
    for(int i=1; i<=n; i++){
        for(int j=1; j<=i; j++){
            if((i+j)%2 ==0 ){
                cout<<"1";
            }
            else{
                cout<<"0";
            }
             
        } 
        cout<<endl;
    }
}

void pattern5(int n){
    for(int i=3; i>=n; i--){
        for(int j=i; j<=n; j++){
            if(j==3 || i==n){
                cout<<"*";
            }
        } 
        cout<<endl;
    }
}

int main()
{
    int n;
    cout<<"Enter a number : ";
    cin>>n;
    pattern1(n);
    pattern2(n);
    pattern3(n);
    pattern4(n);
    pattern5(n);
}
