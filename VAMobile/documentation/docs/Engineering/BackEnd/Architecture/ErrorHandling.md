# Error Handling
There are several ways of raising an error in the backend. The list of currently used ones are:

* Common::Exceptions::BackendServiceException
* Common::Exceptions::FilterNotAllowed
* Common::Exceptions::Forbidden
* Common::Exceptions::InternalServerError
* Common::Exceptions::InvalidFieldValue
* Common::Exceptions::ParameterMissing
* Common::Exceptions::RecordNotFound
* Common::Exceptions::Unauthorized
* Common::Exceptions::ValidationErrors

All of these errors implement an `errors` method that returns an array of `Common::Exceptions::SerializableError` objects. A `Common::Exceptions::SerializableError` can contain the following attributes:
* title
* detail
* id
* href
* code
* source
* links
* status
* meta

But it will only contain non nil values when it is serialized. 
